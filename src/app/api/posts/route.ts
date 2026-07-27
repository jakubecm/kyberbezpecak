import { NextRequest, NextResponse } from "next/server";
import { getAllPosts } from "@/lib/posts";
import { type Locale, isValidLocale, defaultLocale } from "@/i18n/config";

export async function GET(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get("locale") ?? defaultLocale;
  const lang: Locale = isValidLocale(locale) ? locale : defaultLocale;

  const posts = getAllPosts(lang);
  // Strip the full content from the listing – we only need metadata
  const postsMinimal = posts.map(({ content, ...rest }) => rest);
  return NextResponse.json(postsMinimal);
}
