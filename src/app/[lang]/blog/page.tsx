import { Suspense } from "react";
import type { Metadata } from "next";
import { BlogContent } from "./BlogContent";
import { getAllPosts } from "@/lib/posts";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return {
    title: dict.blog.title,
    description: dict.blog.description,
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const posts = getAllPosts(lang as Locale).map(({ content: _content, ...meta }) => meta);

  return (
    <div className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-16">
      <header className="flex flex-col gap-5 border-b border-rule pb-12 pt-14 sm:pt-20">
        <span className="font-mono text-[13px] uppercase tracking-[0.08em] text-muted">{dict.blog.eyebrow}</span>
        <h1 className="font-mono text-4xl font-medium tracking-[-0.02em] sm:text-5xl">{dict.blog.title}</h1>
        <p className="max-w-[600px] text-lg leading-relaxed text-fg-3">{dict.blog.description}</p>
      </header>

      <div className="pb-24 pt-10">
        <Suspense fallback={<BlogSkeleton />}>
          <BlogContent posts={posts} />
        </Suspense>
      </div>
    </div>
  );
}

function BlogSkeleton() {
  return (
    <div className="space-y-8" aria-hidden="true">
      <div className="h-12 animate-pulse border border-rule bg-surface" />
      <div className="border-t border-fg">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-3 border-b border-rule py-7">
            <div className="h-3 w-40 animate-pulse bg-surface" />
            <div className="h-6 w-3/4 animate-pulse bg-surface" />
          </div>
        ))}
      </div>
    </div>
  );
}
