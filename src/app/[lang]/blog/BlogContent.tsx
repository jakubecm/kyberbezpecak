"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ArticleIndex } from "@/components/ArticleIndex";
import { Pagination } from "@/components/Pagination";
import { type PostMeta } from "@/types";
import { useDictionary } from "@/i18n/DictionaryProvider";

const PER_PAGE = 10;

function articlesWord(count: number, lang: string): string {
  if (lang === "en") return count === 1 ? "article" : "articles";
  if (count === 1) return "článek";
  if (count >= 2 && count <= 4) return "články";
  return "článků";
}

export function BlogContent({ posts: allPosts }: { posts: PostMeta[] }) {
  const searchParams = useSearchParams();
  const { dict, lang } = useDictionary();

  const category = searchParams.get("category");
  const query = searchParams.get("q") ?? "";
  const page = parseInt(searchParams.get("page") ?? "1", 10);

  const categories = useMemo(
    () => Array.from(new Set(allPosts.map((p) => p.category))).sort((a, b) => a.localeCompare(b)),
    [allPosts]
  );

  const filteredPosts = useMemo(() => {
    let posts = allPosts;

    if (category) {
      posts = posts.filter((p) => p.category === category);
    }

    if (query) {
      const lowerQ = query.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(lowerQ) ||
          p.description.toLowerCase().includes(lowerQ) ||
          p.tags.some((t) => t.toLowerCase().includes(lowerQ))
      );
    }

    return posts;
  }, [allPosts, category, query]);

  const totalPages = Math.ceil(filteredPosts.length / PER_PAGE);
  const currentPage = Math.max(1, Math.min(Number.isNaN(page) ? 1 : page, totalPages || 1));
  const paginatedPosts = filteredPosts.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);
  const isFiltering = Boolean(category || query);

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <SearchBar />
        <CategoryFilter categories={categories} />
      </div>

      <p className="font-mono text-[13px] text-muted" aria-live="polite">
        {filteredPosts.length === 0
          ? dict.blog.noResults
          : `${dict.blog.found} ${filteredPosts.length} ${articlesWord(filteredPosts.length, lang)}`}
        {category && ` ${dict.blog.inCategory} „${category}“`}
        {query && ` ${dict.blog.forQuery} „${query}“`}
      </p>

      <ArticleIndex
        posts={paginatedPosts}
        emptyText={isFiltering ? `${dict.blog.nothingFound}. ${dict.blog.tryDifferent}` : dict.home.empty}
      />

      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
}
