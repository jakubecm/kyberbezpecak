"use client";

import { useEffect, useState } from "react";
import { type Post } from "@/types";
import { useDictionary } from "@/i18n/DictionaryProvider";

export function usePosts(): Post[] {
  const [posts, setPosts] = useState<Post[]>([]);
  const { lang } = useDictionary();

  useEffect(() => {
    fetch(`/api/posts?locale=${lang}`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch(() => setPosts([]));
  }, [lang]);

  return posts;
}
