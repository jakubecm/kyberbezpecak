"use client";

import Link from "next/link";
import { type PostMeta } from "@/types";
import { formatIsoDate, formatPostId } from "@/lib/utils";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { localePath } from "@/i18n/config";

const GRID =
  "grid grid-cols-[auto_auto_minmax(0,1fr)_auto] gap-x-4 gap-y-2 md:grid-cols-[96px_112px_minmax(0,1fr)_150px_64px] md:gap-x-6";

export function ArticleIndex({ posts, emptyText }: { posts: PostMeta[]; emptyText?: string }) {
  const { dict, lang } = useDictionary();

  return (
    <div>
      <div
        aria-hidden="true"
        className={`${GRID} hidden border-t border-fg py-3 font-mono text-xs uppercase text-muted md:grid`}
      >
        <span>{dict.index.id}</span>
        <span>{dict.index.date}</span>
        <span>{dict.index.title}</span>
        <span>{dict.index.category}</span>
        <span className="text-right">{dict.index.reading}</span>
      </div>

      {posts.length === 0 ? (
        <p className="border-y border-rule py-8 font-mono text-sm text-muted md:border-t-0">
          {emptyText}
        </p>
      ) : (
        <ul className="border-t border-rule md:border-t-0">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-rule">
              <Link
                href={localePath(lang, `/blog/${post.slug}`)}
                className={`${GRID} group items-baseline py-6 md:py-7`}
              >
                <span className="col-start-1 row-start-1 font-mono text-[13px] text-accent">
                  {formatPostId(post.number)}
                </span>
                <time
                  dateTime={post.date}
                  className="col-start-2 row-start-1 font-mono text-[13px] text-muted"
                >
                  {formatIsoDate(post.date)}
                </time>
                <span className="col-span-full row-start-2 flex flex-col gap-2 md:col-span-1 md:col-start-3 md:row-start-1">
                  <span className="text-xl font-medium leading-snug text-fg transition-colors group-hover:text-accent md:text-2xl">
                    {post.title}
                  </span>
                  <span className="text-base leading-normal text-fg-3">{post.description}</span>
                </span>
                <span className="col-start-3 row-start-1 justify-self-start font-mono text-xs uppercase text-fg md:col-start-4">
                  <span className="border border-rule-strong px-2 py-0.5">{post.category}</span>
                </span>
                <span className="col-start-4 row-start-1 text-right font-mono text-[13px] text-muted md:col-start-5">
                  {post.readingMinutes} min
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
