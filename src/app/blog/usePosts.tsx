"use client";

import { useEffect, useState } from "react";
import { type Post } from "@/types";

export function usePosts(): Post[] {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch(() => setPosts([]));
  }, []);

  return posts;
}
