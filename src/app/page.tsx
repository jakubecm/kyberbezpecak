import Link from "next/link";
import { getLatestPosts, getAllCategories } from "@/lib/posts";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryList } from "@/components/CategoryList";
import { Newsletter } from "@/components/Newsletter";
import { HiOutlineCommandLine, HiOutlineArrowRight } from "react-icons/hi2";

export default function HomePage() {
  const latestPosts = getLatestPosts(6);
  const categories = getAllCategories();

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* ===== Hero Section ===== */}
      <section className="py-16 sm:py-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] text-xs font-mono text-[var(--text-muted)] mb-6">
          <HiOutlineCommandLine className="w-3.5 h-3.5 text-[var(--accent)]" />
          <span>kybernetická bezpečnost &middot; blog &middot; knowledge base</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          <span className="text-[var(--text-primary)]">Ahoj, jsem </span>
          <span className="text-[var(--accent)] glow-green">Milan</span>
        </h1>

        <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-8 leading-relaxed">
          Píšu si tady o kybernetické bezpečnosti – od aplikační bezpečnosti a SSDLC přes
          různé CTF experimenty. Najdeš tady moje
          poznámky, návody a postřehy z praxe. A vlastně je tady najdu i já. Proto blog vznikl. :)
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white dark:text-black font-semibold text-sm transition-colors"
          >
            Číst články
            <HiOutlineArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/o-mne"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-[var(--accent)] text-[var(--text-secondary)] hover:text-[var(--accent)] font-medium text-sm transition-colors"
          >
            O mně
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
                Vítej na kyberbezpecak.cz 🛡️
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
              <span className="text-[var(--accent)] font-mono">$</span> Nejnovější
              články
            </h2>
            <Link
              href="/blog"
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1"
            >
              Všechny články
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
            <span className="text-[var(--accent)] font-mono">$</span> Kategorie
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
