import Link from "next/link";
import type { Metadata } from "next";
import { getLatestPosts, getAllCategories } from "@/lib/posts";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryList } from "@/components/CategoryList";
import { Newsletter } from "@/components/Newsletter";
import { HiOutlineCommandLine, HiOutlineArrowRight } from "react-icons/hi2";
import { type Locale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (lang === "en") {
    return {
      title: "Kyberbezpečák | Cybersecurity Blog",
      description:
        "Milan Jakubec's personal blog about cybersecurity. Articles on AppSec, Red & Blue Team, legislation, CTF and case studies.",
      openGraph: {
        locale: "en_US",
        title: "Kyberbezpečák | Cybersecurity Blog",
        description:
          "Milan Jakubec's personal blog about cybersecurity – AppSec, Red & Blue Team, legislation, CTF and case studies.",
      },
    };
  }
  return {};
}

export default async function HomePage({ params }: PageProps) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);

  const latestPosts = getLatestPosts(6, lang);
  const categories = getAllCategories(lang);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* ===== Hero Section ===== */}
      <section className="py-16 sm:py-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] text-xs font-mono text-[var(--text-muted)] mb-6">
          <HiOutlineCommandLine className="w-3.5 h-3.5 text-[var(--accent)]" />
          <span>{dict.home.badge}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          <span className="text-[var(--text-primary)]">{dict.home.greeting} </span>
          <span className="text-[var(--accent)] glow-green">Milan</span>
        </h1>

        <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-8 leading-relaxed">
          {dict.home.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href={localePath(lang, "/blog")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white dark:text-black font-semibold text-sm transition-colors"
          >
            {dict.home.readArticles}
            <HiOutlineArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={localePath(lang, "/about")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-[var(--accent)] text-[var(--text-secondary)] hover:text-[var(--accent)] font-medium text-sm transition-colors"
          >
            {dict.home.aboutMe}
          </Link>
        </div>

        {/* Terminal-style decoration */}
        <div className="mt-12 mx-auto max-w-lg text-left">
          <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] overflow-hidden font-mono text-xs">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-[var(--border-color)] bg-[var(--bg-tertiary)]">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              <span className="ml-2 text-[var(--text-muted)]">terminal</span>
            </div>
            <div className="p-4 space-y-1.5">
              <p>
                <span className="text-[var(--accent)]">$</span>{" "}
                <span className="text-[var(--text-secondary)]">whoami</span>
              </p>
              <p className="text-[var(--text-primary)]">milan-jakubec</p>
              <p>
                <span className="text-[var(--accent)]">$</span>{" "}
                <span className="text-[var(--text-secondary)]">cat /etc/motd</span>
              </p>
              <p className="text-[var(--text-primary)]">
                {dict.home.terminalWelcome}
              </p>
              <p>
                <span className="text-[var(--accent)]">$</span>
                <span className="animate-blink">▊</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Latest Articles ===== */}
      {latestPosts.length > 0 && (
        <section className="pb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
              <span className="text-[var(--accent)] font-mono">$</span> {dict.home.latestArticles}
            </h2>
            <Link
              href={localePath(lang, "/blog")}
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1"
            >
              {dict.home.allArticles}
              <HiOutlineArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* ===== Categories ===== */}
      {categories.length > 0 && (
        <section className="pb-16">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
            <span className="text-[var(--accent)] font-mono">$</span> {dict.home.categories}
          </h2>
          <CategoryList categories={categories} />
        </section>
      )}

      {/* ===== Newsletter ===== */}
      <section className="pb-16">
        <Newsletter />
      </section>
    </div>
  );
}
