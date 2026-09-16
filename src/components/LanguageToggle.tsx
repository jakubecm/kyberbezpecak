"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useDictionary } from "@/i18n/DictionaryProvider";

export function LanguageToggle() {
  const { lang, dict } = useDictionary();
  const pathname = usePathname();

  // CS (default locale) has no prefix: /blog; EN is prefixed: /en/blog
  const otherPath =
    lang === "cs" ? `/en${pathname === "/" ? "" : pathname}` : pathname.replace(/^\/en/, "") || "/";

  return (
    <Link
      href={otherPath}
      title={dict.navbar.switchLanguage}
      aria-label={dict.navbar.switchLanguage}
      className="flex gap-2 font-mono text-[13px]"
    >
      <span className={lang === "cs" ? "text-fg" : "text-muted hover:text-fg"}>CS</span>
      <span className={lang === "en" ? "text-fg" : "text-muted hover:text-fg"}>EN</span>
    </Link>
  );
}
