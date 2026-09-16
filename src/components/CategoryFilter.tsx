"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { localePath } from "@/i18n/config";

/** Categories come from existing posts, so the filter only shows what's actually written. */
export function CategoryFilter({ categories }: { categories: string[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { dict, lang } = useDictionary();
  const activeCategory = searchParams.get("category");

  if (categories.length < 2) return null;

  const handleFilter = (category: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    params.delete("page");
    router.push(`${localePath(lang, "/blog")}?${params.toString()}`);
  };

  const buttonClass = (active: boolean) =>
    cn(
      "border px-3 py-1.5 font-mono text-xs uppercase transition-colors cursor-pointer",
      active ? "border-accent text-accent" : "border-rule text-muted hover:border-rule-strong hover:text-fg"
    );

  return (
    <div role="group" aria-label={dict.blog.filterLabel} className="flex flex-wrap gap-2">
      <button type="button" aria-pressed={!activeCategory} onClick={() => handleFilter(null)} className={buttonClass(!activeCategory)}>
        {dict.blog.all}
      </button>
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          aria-pressed={activeCategory === category}
          onClick={() => handleFilter(category)}
          className={buttonClass(activeCategory === category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
