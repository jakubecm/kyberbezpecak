"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
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
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push("...");
    pages.push(totalPages);
  }

  const box = "flex h-10 min-w-10 items-center justify-center border px-3 font-mono text-[13px] transition-colors";

  return (
    <nav aria-label={dict.pagination.label} className="mt-10 flex flex-wrap items-center gap-2">
      <Link
        href={buildHref(Math.max(1, currentPage - 1))}
        aria-label={dict.pagination.previous}
        aria-disabled={currentPage === 1}
        className={cn(box, "border-rule", currentPage === 1 ? "pointer-events-none text-faint" : "text-fg hover:border-accent hover:text-accent")}
      >
        ←
      </Link>
      {pages.map((page, i) =>
        page === "..." ? (
          <span key={`dots-${i}`} className="px-1 font-mono text-muted">
            …
          </span>
        ) : (
          <Link
            key={page}
            href={buildHref(page)}
            aria-current={page === currentPage ? "page" : undefined}
            className={cn(box, page === currentPage ? "border-accent text-accent" : "border-rule text-fg hover:border-rule-strong")}
          >
            {String(page).padStart(2, "0")}
          </Link>
        )
      )}
      <Link
        href={buildHref(Math.min(totalPages, currentPage + 1))}
        aria-label={dict.pagination.next}
        aria-disabled={currentPage === totalPages}
        className={cn(box, "border-rule", currentPage === totalPages ? "pointer-events-none text-faint" : "text-fg hover:border-accent hover:text-accent")}
      >
        →
      </Link>
    </nav>
  );
}
