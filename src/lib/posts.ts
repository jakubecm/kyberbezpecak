import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { type Post, type PostFrontmatter, type Category } from "@/types";
import { type Locale, defaultLocale } from "@/i18n/config";

const contentBase = path.join(process.cwd(), "content", "posts");

function getPostsDirectory(locale: Locale = defaultLocale): string {
  return path.join(contentBase, locale);
}

function ensurePostsDirectory(locale: Locale = defaultLocale) {
  const dir = getPostsDirectory(locale);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

/**
 * Sanitize a slug to prevent path traversal attacks.
 * Only allow alphanumeric, hyphens, and underscores.
 */
function sanitizeSlug(slug: string): string | null {
  if (!/^[a-zA-Z0-9_-]+$/.test(slug)) return null;
  return slug;
}

export function getAllPosts(locale: Locale = defaultLocale): Post[] {
  ensurePostsDirectory(locale);
  const postsDirectory = getPostsDirectory(locale);

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((name) => name.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const frontmatter = data as PostFrontmatter;

      if (!frontmatter.published) return null;

      const stats = readingTime(content);

      return {
        slug,
        content,
        readingTime: locale === "en" ? stats.text : stats.text.replace("read", "čtení"),
        ...frontmatter,
      } as Post;
    })
    .filter((post): post is Post => post !== null);

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string, locale: Locale = defaultLocale): Post | null {
  const safeSlug = sanitizeSlug(slug);
  if (!safeSlug) return null;

  ensurePostsDirectory(locale);
  const postsDirectory = getPostsDirectory(locale);

  const fullPath = path.join(postsDirectory, `${safeSlug}.mdx`);

  // Double-check resolved path is within postsDirectory
  const resolved = path.resolve(fullPath);
  if (!resolved.startsWith(path.resolve(postsDirectory))) return null;

  if (!fs.existsSync(fullPath)) {
    // Fallback: if article doesn't exist in this locale, try default
    if (locale !== defaultLocale) {
      return getPostBySlug(slug, defaultLocale);
    }
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const frontmatter = data as PostFrontmatter;
  const stats = readingTime(content);

  return {
    slug: safeSlug,
    content,
    readingTime: locale === "en" ? stats.text : stats.text.replace("read", "čtení"),
    ...frontmatter,
  } as Post;
}

export function getPostsByCategory(category: Category, locale: Locale = defaultLocale): Post[] {
  return getAllPosts(locale).filter((post) => post.category === category);
}

export function getAllCategories(locale: Locale = defaultLocale): { name: Category; count: number }[] {
  const posts = getAllPosts(locale);
  const categoryMap = new Map<Category, number>();

  posts.forEach((post) => {
    const current = categoryMap.get(post.category) ?? 0;
    categoryMap.set(post.category, current + 1);
  });

  return Array.from(categoryMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

export function getAllSlugs(locale: Locale = defaultLocale): string[] {
  ensurePostsDirectory(locale);
  const postsDirectory = getPostsDirectory(locale);

  return fs
    .readdirSync(postsDirectory)
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => name.replace(/\.mdx$/, ""));
}

export function getLatestPosts(count: number = 3, locale: Locale = defaultLocale): Post[] {
  return getAllPosts(locale).slice(0, count);
}
