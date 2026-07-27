"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi2";
import { useDictionary } from "@/i18n/DictionaryProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { dict } = useDictionary();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-tertiary)]"
        aria-label={dict.navbar.toggleTheme}
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-tertiary)] hover:border-[var(--accent)] transition-colors cursor-pointer"
      aria-label={theme === "dark" ? dict.navbar.toggleThemeDark : dict.navbar.toggleThemeLight}
    >
      {theme === "dark" ? (
        <HiSun className="w-5 h-5 text-yellow-400" />
      ) : (
        <HiMoon className="w-5 h-5 text-slate-700" />
      )}
    </button>
  );
}
