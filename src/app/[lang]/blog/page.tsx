import { Suspense } from "react";
import type { Metadata } from "next";
import { BlogContent } from "./BlogContent";
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

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-3">
          <span className="text-[var(--accent)] font-mono">$</span> {dict.blog.title}
        </h1>
        <p className="text-[var(--text-secondary)] max-w-2xl">
          {dict.blog.description}
        </p>
      </div>

      <Suspense fallback={<BlogSkeleton />}>
        <BlogContent />
      </Suspense>
    </div>
  );
}

function BlogSkeleton() {
  return (
    <div className="space-y-6">
      <div className="h-10 bg-[var(--bg-tertiary)] rounded-lg animate-pulse" />
      <div className="h-8 bg-[var(--bg-tertiary)] rounded-lg animate-pulse w-3/4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-64 bg-[var(--bg-tertiary)] rounded-xl animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}
