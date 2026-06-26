import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/posts";

export async function GET() {
  const posts = getAllPosts();
  // Strip the full content from the listing – we only need metadata
  const postsMinimal = posts.map(({ content, ...rest }) => rest);
  return NextResponse.json(postsMinimal);
}
