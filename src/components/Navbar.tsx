"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { localePath } from "@/i18n/config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { dict, lang } = useDictionary();

  const homeHref = localePath(lang, "/");
  const navLinks = [
    { n: "01", href: localePath(lang, "/blog"), match: localePath(lang, "/blog"), label: dict.navbar.articles },
    { n: "02", href: localePath(lang, "/about"), match: localePath(lang, "/about"), label: dict.navbar.about },
    { n: "03", href: localePath(lang, "/about#contact"), match: null, label: dict.navbar.contact },
  ];

  const isActive = (match: string | null) =>
    match !== null && (pathname === match || pathname.startsWith(`${match}/`));

  const linkClass = (active: boolean) =>
    cn("transition-colors hover:text-accent", active ? "text-accent" : "text-fg");

  return (
    <header className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16">
      <div className="flex h-[72px] items-center justify-between border-b border-rule font-mono text-[13px] md:grid md:grid-cols-12 md:gap-x-6">
        <Link
          href={homeHref}
          aria-label={dict.navbar.home}
          className="text-[15px] font-bold tracking-[0.04em] text-fg hover:text-fg md:col-span-4"
        >
          KYBERBEZPEČÁK<span className="text-accent">_</span>
        </Link>

        <nav className="hidden md:col-span-5 md:col-start-6 md:flex md:gap-8" aria-label="Main">
          {navLinks.map((link) => {
            const active = isActive(link.match);
            return (
              <Link
                key={link.n}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={linkClass(active)}
              >
                <span className="text-muted">{link.n}</span> {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center justify-end gap-4 md:col-span-2 md:col-start-11 md:flex">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          className="-mr-2 px-2 py-3 text-muted hover:text-fg md:hidden cursor-pointer"
        >
          {mobileOpen ? dict.navbar.closeMenu : dict.navbar.menu}
        </button>
      </div>

      {mobileOpen && (
        <div id="mobile-menu" className="border-b border-rule py-4 font-mono text-sm md:hidden">
          <nav className="flex flex-col" aria-label="Main">
            {navLinks.map((link) => {
              const active = isActive(link.match);
              return (
                <Link
                  key={link.n}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn("py-3", linkClass(active))}
                >
                  <span className="text-muted">{link.n}</span> {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-3 flex items-center gap-4 border-t border-rule pt-4">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
