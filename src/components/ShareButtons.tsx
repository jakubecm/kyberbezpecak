"use client";

import { FaXTwitter, FaLinkedin, FaFacebook, FaLink } from "react-icons/fa6";
import { useState } from "react";

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const url = `https://kyberbezpecak.cz/blog/${slug}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback for older browsers
    }
  };

  const socialLinks = [
    {
      icon: FaXTwitter,
      label: "X / Twitter",
      href: `https://x.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      icon: FaFacebook,
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
  ];

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-[var(--text-muted)] mr-1">Sdílet:</span>
      {socialLinks.map(({ icon: Icon, label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Sdílet na ${label}`}
          className="p-2 rounded-lg border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
        >
          <Icon className="w-3.5 h-3.5" />
        </a>
      ))}
      <button
        onClick={copyLink}
        aria-label="Kopírovat odkaz"
        className="p-2 rounded-lg border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors cursor-pointer relative"
      >
        <FaLink className="w-3.5 h-3.5" />
        {copied && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-[var(--accent)] text-white dark:text-black px-2 py-0.5 rounded whitespace-nowrap">
            Zkopírováno!
          </span>
        )}
      </button>
    </div>
  );
}
