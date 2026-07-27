"use client";

import Link from "next/link";
import { HiOutlineTerminal } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { localePath } from "@/i18n/config";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { dict, lang } = useDictionary();

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <HiOutlineTerminal className="w-5 h-5 text-[var(--accent)]" />
              <span className="font-mono font-bold text-[var(--accent)]">
                kyberbezpecak.cz
              </span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {dict.footer.description}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3">
              {dict.footer.navigation}
            </h3>
            <ul className="space-y-2">
              {[
                { href: localePath(lang, "/"), label: dict.navbar.home },
                { href: localePath(lang, "/blog"), label: dict.navbar.blog },
                { href: localePath(lang, "/about"), label: dict.navbar.about },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3">
              {dict.footer.socialNetworks}
            </h3>
            <div className="flex gap-3">
              {[
                {
                  icon: FaGithub,
                  href: "https://github.com/jakubecm",
                  label: "GitHub",
                },
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/milan-jakubec/",
                  label: "LinkedIn",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[var(--text-muted)] font-mono">
            &copy; {currentYear} Milan Jakubec. {dict.footer.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}
