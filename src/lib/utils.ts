import { type Category } from "@/types";

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("cs-CZ", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getCategoryColor(category: Category): string {
  const colors: Record<Category, string> = {
    AppSec: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
    Legislativa: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    "Blue Team": "bg-blue-500/15 text-blue-400 border-blue-500/30",
    "Red Team": "bg-red-500/15 text-red-400 border-red-500/30",
    CTF: "bg-purple-500/15 text-purple-400 border-purple-500/30",
    "Case Study": "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  };
  return colors[category] ?? "bg-gray-500/15 text-gray-400 border-gray-500/30";
}

export function getCategoryColorLight(category: Category): string {
  const colors: Record<Category, string> = {
    AppSec: "bg-cyan-100 text-cyan-700 border-cyan-300",
    Legislativa: "bg-amber-100 text-amber-700 border-amber-300",
    "Blue Team": "bg-blue-100 text-blue-700 border-blue-300",
    "Red Team": "bg-red-100 text-red-700 border-red-300",
    CTF: "bg-purple-100 text-purple-700 border-purple-300",
    "Case Study": "bg-emerald-100 text-emerald-700 border-emerald-300",
  };
  return colors[category] ?? "bg-gray-100 text-gray-700 border-gray-300";
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
