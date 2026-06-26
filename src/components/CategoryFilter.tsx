"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { CATEGORIES, type Category } from "@/types";
import { getCategoryColor, getCategoryColorLight, cn } from "@/lib/utils";

export function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") as Category | null;

  const handleFilter = (category: Category | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    params.delete("page");
    router.push(`/blog?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => handleFilter(null)}
        className={cn(
          "px-3 py-1.5 rounded-full text-xs font-medium border transition-colors cursor-pointer",
          !activeCategory
            ? "bg-[var(--accent)] text-white dark:text-black border-[var(--accent)]"
            : "border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
        )}
      >
        Všechny
      </button>
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => handleFilter(cat)}
          className={cn(
            "px-3 py-1.5 rounded-full text-xs font-medium border transition-colors cursor-pointer",
            activeCategory === cat
              ? `dark:${getCategoryColor(cat)} ${getCategoryColorLight(cat)}`
              : "border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
