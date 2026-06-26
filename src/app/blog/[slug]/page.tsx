import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import { formatDate, getCategoryColor, getCategoryColorLight } from "@/lib/utils";
import { MdxRenderer } from "@/components/MdxRenderer";
import { ShareButtons } from "@/components/ShareButtons";
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineUser,
  HiOutlineArrowLeft,
} from "react-icons/hi2";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return { title: "Článek nenalezen" };

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
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors mb-8"
      >
        <HiOutlineArrowLeft className="w-4 h-4" />
        Zpět na blog
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="mb-4">
          <Link
            href={`/blog?category=${encodeURIComponent(post.category)}`}
            className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full border dark:${getCategoryColor(post.category)} ${getCategoryColorLight(post.category)} hover:opacity-80 transition-opacity`}
          >
            {post.category}
          </Link>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] leading-tight mb-4">
          {post.title}
        </h1>

        <p className="text-lg text-[var(--text-secondary)] mb-6">
          {post.description}
        </p>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)] pb-6 border-b border-[var(--border-color)]">
          <span className="flex items-center gap-1.5">
            <HiOutlineUser className="w-4 h-4" />
            {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <HiOutlineCalendar className="w-4 h-4" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <HiOutlineClock className="w-4 h-4" />
            {post.readingTime}
          </span>
        </div>
      </header>

      {/* Article content */}
      <MdxRenderer source={post.content} />

      {/* Tags & Share */}
      <footer className="mt-12 pt-8 border-t border-[var(--border-color)]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-tertiary)] px-2.5 py-1 rounded border border-[var(--border-color)]"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Share */}
          <ShareButtons title={post.title} slug={post.slug} />
        </div>
      </footer>
    </article>
  );
}
