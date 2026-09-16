"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { localePath } from "@/i18n/config";

export function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { dict, lang } = useDictionary();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  const handleSearch = (value: string) => {
    setQuery(value);
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("q", value);
      params.delete("page");
    } else {
      params.delete("q");
    }
    router.push(`${localePath(lang, "/blog")}?${params.toString()}`);
  };

  return (
    <div className="relative">
      <label htmlFor="blog-search" className="sr-only">
        {dict.blog.searchLabel}
      </label>
      <span aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-sm text-accent">
        /
      </span>
      <input
        id="blog-search"
        type="search"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder={dict.blog.searchPlaceholder}
        className="w-full border border-rule bg-surface py-3 pl-9 pr-24 font-mono text-sm text-fg placeholder:text-faint focus:border-accent focus:outline-none [&::-webkit-search-cancel-button]:hidden"
      />
      {query && (
        <button
          type="button"
          onClick={() => handleSearch("")}
          aria-label={dict.blog.clearSearch}
          className="absolute right-3 top-1/2 -translate-y-1/2 px-1 font-mono text-xs text-muted hover:text-fg cursor-pointer"
        >
          esc ×
        </button>
      )}
    </div>
  );
}
