"use client";

import { useTheme } from "next-themes";
import { useDictionary } from "@/i18n/DictionaryProvider";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { dict } = useDictionary();

  // The label is driven by the .dark class (set by next-themes before hydration),
  // so it renders correctly even before React takes over.
  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className="min-w-[58px] border border-rule-strong px-2.5 py-1 font-mono text-[13px] text-muted transition-colors hover:border-muted hover:text-fg cursor-pointer"
    >
      <span className="hidden dark:inline">
        light<span className="sr-only"> – {dict.navbar.switchToLight}</span>
      </span>
      <span className="dark:hidden">
        dark<span className="sr-only"> – {dict.navbar.switchToDark}</span>
      </span>
    </button>
  );
}
