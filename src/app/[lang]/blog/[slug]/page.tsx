import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import { extractHeadings, formatIsoDate, formatPostId } from "@/lib/utils";
import { MdxRenderer } from "@/components/MdxRenderer";
import { ShareButtons } from "@/components/ShareButtons";
import { type Locale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

interface PageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs("cs");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, lang } = await params;
  const post = getPostBySlug(slug, lang as Locale);

  if (!post) return { title: "Not found" };

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    keywords: post.tags,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [post.author],
      tags: post.tags,
      url: `https://kyberbezpecak.cz/blog/${slug}`,
      ...(post.image && {
        images: [{ url: post.image, width: 1200, height: 630 }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      ...(post.image && { images: [post.image] }),
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { lang: langParam, slug } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  const post = getPostBySlug(slug, lang);

  if (!post) notFound();

  const headings = extractHeadings(post.content);
  const blogHref = localePath(lang, "/blog");

  const meta = [
    {
      label: dict.article.category,
      value: (
        <Link
          href={`${blogHref}?category=${encodeURIComponent(post.category)}`}
          className="transition-colors hover:text-accent"
        >
          {post.category}
        </Link>
      ),
    },
    { label: dict.article.published, value: <time dateTime={post.date}>{formatIsoDate(post.date)}</time> },
    ...(post.updated
      ? [{ label: dict.article.updated, value: <time dateTime={post.updated}>{formatIsoDate(post.updated)}</time> }]
      : []),
    { label: dict.article.reading, value: `${post.readingMinutes} min` },
    ...(post.tags.length > 0 ? [{ label: dict.article.tags, value: post.tags.join(", ") }] : []),
  ];

  return (
    <article className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-16">
      <div className="flex h-14 items-center justify-between gap-6 border-b border-rule font-mono text-[13px]">
        <Link href={blogHref} className="text-muted transition-colors hover:text-fg">
          ← {dict.article.back}
        </Link>
        <span className="hidden truncate text-muted sm:block">
          ~/blog/<span className="text-fg">{post.slug}</span>
        </span>
      </div>

      <header className="grid grid-cols-1 gap-y-10 border-b border-rule pb-12 pt-14 lg:grid-cols-12 lg:gap-x-6 lg:pb-14 lg:pt-20">
        <div className="flex flex-col gap-6 lg:col-span-8">
          <span className="font-mono text-[13px] text-accent">{formatPostId(post.number)}</span>
          <h1 className="font-mono text-[1.875rem] font-medium leading-[1.18] tracking-[-0.02em] sm:text-4xl lg:text-[2.75rem]">
            {post.title}
          </h1>
          <p className="text-lg leading-relaxed text-fg-3 sm:text-xl">{post.description}</p>
        </div>

        <dl className="grid grid-cols-[88px_minmax(0,1fr)] self-end border-t border-rule font-mono text-[12.5px] leading-normal lg:col-span-3 lg:col-start-10">
          {meta.map((item) => (
            <div key={item.label} className="contents">
              <dt className="border-b border-rule py-2.5 text-muted">{item.label}</dt>
              <dd className="border-b border-rule py-2.5">{item.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="grid grid-cols-1 pb-24 pt-12 lg:grid-cols-12 lg:gap-x-6 lg:pt-16">
        {headings.length > 1 && (
          <nav aria-label={dict.article.contents} className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-8 flex flex-col gap-3 font-mono text-[13px]">
              <span className="mb-1 uppercase text-fg">{dict.article.contents}</span>
              {headings.map((heading, i) => (
                <a
                  key={heading.id}
                  href={`#${heading.id}`}
                  className="flex gap-3 text-muted transition-colors hover:text-fg"
                >
                  <span className="text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span>{heading.text}</span>
                </a>
              ))}
            </div>
          </nav>
        )}

        <div className="min-w-0 lg:col-span-7 lg:col-start-4">
          <MdxRenderer source={post.content} lang={lang} />

          <footer className="mt-16 flex flex-col gap-4 border-t border-rule pt-6 font-mono text-[13px] sm:flex-row sm:items-center sm:justify-between">
            <Link href={blogHref} className="text-muted transition-colors hover:text-fg">
              ← {dict.article.back}
            </Link>
            <ShareButtons title={post.title} slug={post.slug} />
          </footer>
        </div>
      </div>
    </article>
  );
}
