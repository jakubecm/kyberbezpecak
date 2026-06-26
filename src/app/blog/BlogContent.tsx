"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ArticleCard } from "@/components/ArticleCard";
import { Pagination } from "@/components/Pagination";
import { type Category } from "@/types";
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import { usePosts } from "./usePosts";

export function BlogContent() {
  const searchParams = useSearchParams();
  const allPosts = usePosts();

  const category = searchParams.get("category") as Category | null;
  const query = searchParams.get("q") ?? "";
  const page = parseInt(searchParams.get("page") ?? "1", 10);
  const perPage = 6;

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

  const totalPages = Math.ceil(filteredPosts.length / perPage);
  const currentPage = Math.max(1, Math.min(page, totalPages || 1));
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="space-y-4">
        <SearchBar />
        <CategoryFilter />
      </div>

      {/* Results info */}
      <p className="text-sm text-[var(--text-muted)] font-mono">
        {filteredPosts.length === 0
          ? "Žádné výsledky"
          : `Nalezeno ${filteredPosts.length} článků`}
        {category && ` v kategorii „${category}"`}
        {query && ` pro „${query}"`}
      </p>

      {/* Articles grid */}
      {paginatedPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedPosts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <HiOutlineDocumentMagnifyingGlass className="w-12 h-12 text-[var(--text-muted)] mx-auto mb-4" />
          <p className="text-[var(--text-secondary)] text-lg font-medium mb-2">
            Nic nenalezeno
          </p>
          <p className="text-sm text-[var(--text-muted)]">
            Zkus změnit filtr nebo hledaný výraz.
          </p>
        </div>
      )}

      {/* Pagination */}
      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
}
