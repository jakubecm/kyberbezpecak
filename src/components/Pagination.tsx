"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { cn } from "@/lib/utils";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { localePath } from "@/i18n/config";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export function Pagination({ totalPages, currentPage }: PaginationProps) {
  const searchParams = useSearchParams();
  const { dict, lang } = useDictionary();

  if (totalPages <= 1) return null;

  const buildHref = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    return `${localePath(lang, "/blog")}?${params.toString()}`;
  };

  const pages: (number | "...")[] = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (currentPage > 3) pages.push("...");
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push("...");
    pages.push(totalPages);
  }

  return (
    <nav aria-label={dict.pagination.label} className="flex items-center justify-center gap-1.5 mt-10">
      <Link
        href={buildHref(Math.max(1, currentPage - 1))}
        className={cn(
          "p-2 rounded-lg border border-[var(--border-color)] transition-colors",
          currentPage === 1
            ? "pointer-events-none opacity-40"
            : "hover:border-[var(--accent)] hover:text-[var(--accent)]"
        )}
        aria-label={dict.pagination.previous}
      >
        <HiChevronLeft className="w-4 h-4" />
      </Link>

      {pages.map((page, i) =>
        page === "..." ? (
          <span key={`dots-${i}`} className="px-2 text-[var(--text-muted)]">
            …
          </span>
        ) : (
          <Link
            key={page}
            href={buildHref(page)}
            className={cn(
              "min-w-[36px] h-9 flex items-center justify-center rounded-lg text-sm font-medium transition-colors",
              page === currentPage
                ? "bg-[var(--accent)] text-white dark:text-black"
                : "border border-[var(--border-color)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
            )}
          >
            {page}
          </Link>
        )
      )}

      <Link
        href={buildHref(Math.min(totalPages, currentPage + 1))}
        className={cn(
          "p-2 rounded-lg border border-[var(--border-color)] transition-colors",
          currentPage === totalPages
            ? "pointer-events-none opacity-40"
            : "hover:border-[var(--accent)] hover:text-[var(--accent)]"
        )}
        aria-label={dict.pagination.next}
      >
        <HiChevronRight className="w-4 h-4" />
      </Link>
    </nav>
  );
}
