import Link from "next/link";
import { type Category } from "@/types";
import { getCategoryColor, getCategoryColorLight } from "@/lib/utils";

interface CategoryListProps {
  categories: { name: Category; count: number }[];
}

export function CategoryList({ categories }: CategoryListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map(({ name, count }) => (
        <Link
          key={name}
          href={`/blog?category=${encodeURIComponent(name)}`}
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium transition-all hover:scale-105 dark:${getCategoryColor(name)} ${getCategoryColorLight(name)}`}
        >
          {name}
          <span className="text-xs opacity-70">({count})</span>
        </Link>
      ))}
    </div>
  );
}
