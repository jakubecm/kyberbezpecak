"use client";

import { useState } from "react";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { localePath } from "@/i18n/config";

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export function ShareButtons({ title, slug }: ShareButtonsProps) {
  const { dict, lang } = useDictionary();
  const [copied, setCopied] = useState(false);

  const url = `https://kyberbezpecak.cz${localePath(lang, `/blog/${slug}`)}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (e.g. insecure context) – ignore
    }
  };

  const linkClass = "text-fg transition-colors hover:text-accent";

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[13px]">
      <span className="text-muted">{dict.article.share}:</span>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        linkedin
      </a>
      <a
        href={`https://x.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        x
      </a>
      <button type="button" onClick={copyLink} className={`${linkClass} cursor-pointer`} aria-live="polite">
        {copied ? dict.article.copied : dict.article.copyLink}
      </button>
    </div>
  );
}
