export const locales = ["cs", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "cs";

export function isValidLocale(lang: string): lang is Locale {
  return locales.includes(lang as Locale);
}

/**
 * Build a locale-aware path.
 * Default locale (cs) has no prefix: `/blog`
 * Other locales get prefixed: `/en/blog`
 */
export function localePath(lang: Locale, path: string): string {
  return lang === defaultLocale ? path : `/${lang}${path}`;
}
