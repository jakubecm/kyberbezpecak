"use client";

import Link from "next/link";
import { type Post } from "@/types";
import { formatDate, getCategoryColor, getCategoryColorLight } from "@/lib/utils";
import { HiOutlineClock, HiOutlineCalendar } from "react-icons/hi2";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { localePath } from "@/i18n/config";

export function ArticleCard({ post }: { post: Post }) {
  const { lang } = useDictionary();

  return (
    <article className="group relative rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden hover:border-[var(--accent)]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent-glow)]">
      <Link href={localePath(lang, `/blog/${post.slug}`)} className="block p-6">
        {/* Category badge */}
        <div className="mb-3">
          <span
            className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full border dark:${getCategoryColor(post.category)} ${getCategoryColorLight(post.category)}`}
          >
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-2 line-clamp-2">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[var(--text-secondary)] line-clamp-3 mb-4 leading-relaxed">
          {post.description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
          <span className="flex items-center gap-1.5">
            <HiOutlineCalendar className="w-3.5 h-3.5" />
            {formatDate(post.date, lang)}
          </span>
          <span className="flex items-center gap-1.5">
            <HiOutlineClock className="w-3.5 h-3.5" />
            {post.readingTime}
          </span>
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[var(--border-color)]">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono text-[var(--text-muted)] bg-[var(--bg-tertiary)] px-2 py-0.5 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    </article>
  );
}
