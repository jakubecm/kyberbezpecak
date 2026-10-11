"use client";

const SOCIAL_LINKS = [
  { label: "github", href: "https://github.com/jakubecm" },
  { label: "linkedin", href: "https://www.linkedin.com/in/milan-jakubec/" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col gap-6 border-t border-rule py-10 md:grid md:grid-cols-12 md:items-end md:gap-x-6">
        <div className="flex flex-wrap gap-6 font-mono text-[13px] text-muted md:col-span-4 md:col-start-9 md:justify-end">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <span>© {currentYear} Milan Jakubec</span>
        </div>
      </div>
    </footer>
  );
}
