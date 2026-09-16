import { type Locale } from "@/i18n/config";
import { type TocHeading } from "@/types";

export function formatDate(dateString: string, locale: Locale = "cs"): string {
  return new Date(dateString).toLocaleDateString(
    locale === "en" ? "en-US" : "cs-CZ",
    { year: "numeric", month: "long", day: "numeric" }
  );
}

/** 2026-03-15 */
export function formatIsoDate(dateString: string): string {
  const date = new Date(dateString);
  return Number.isNaN(date.getTime()) ? dateString : date.toISOString().slice(0, 10);
}

/** KB-001 */
export function formatPostId(number?: number): string {
  return number ? `KB-${String(number).padStart(3, "0")}` : "KB-···";
}

export function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Strip inline markdown so heading text matches what MDX renders. */
function stripInlineMarkdown(text: string): string {
  return text
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[*_`~]/g, "")
    .trim();
}

/** Collect `## ` headings (outside code fences) for the table of contents. */
export function extractHeadings(markdown: string): TocHeading[] {
  const headings: TocHeading[] = [];
  let inFence = false;

  for (const line of markdown.split(/\r?\n/)) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const match = /^##\s+(.+?)\s*#*\s*$/.exec(line);
    if (match) {
      const text = stripInlineMarkdown(match[1]);
      headings.push({ id: slugify(text), text });
    }
  }

  return headings;
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
