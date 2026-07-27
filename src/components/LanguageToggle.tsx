"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useDictionary } from "@/i18n/DictionaryProvider";

export function LanguageToggle() {
  const { lang } = useDictionary();
  const pathname = usePathname();

  const otherLang = lang === "cs" ? "en" : "cs";

  // For CS (default locale), pathname has no prefix: /blog
  // For EN, pathname has /en prefix: /en/blog
  let otherPath: string;
  if (lang === "cs") {
    // Currently CS (no prefix) → switch to /en/...
    otherPath = `/en${pathname}`;
  } else {
    // Currently /en/... → switch to CS (remove /en prefix)
    otherPath = pathname.replace(/^\/en/, "") || "/";
  }

  return (
    <Link
      href={otherPath}
      className="p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-tertiary)] hover:border-[var(--accent)] transition-colors text-xs font-mono font-bold text-[var(--text-secondary)] hover:text-[var(--accent)] min-w-[36px] text-center"
      title={lang === "cs" ? "Switch to English" : "Přepnout do češtiny"}
    >
      {otherLang.toUpperCase()}
    </Link>
  );
}
