import Link from "next/link";
import type { Metadata } from "next";
import { getLatestPosts } from "@/lib/posts";
import { ArticleIndex } from "@/components/ArticleIndex";
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
  const latestPosts = getLatestPosts(5, lang).map(({ content: _content, ...meta }) => meta);

  const facts = [
    { label: dict.home.facts.author, value: "Milan Jakubec" },
    { label: dict.home.facts.role, value: dict.home.factValues.role },
    { label: dict.home.facts.study, value: dict.home.factValues.study },
    { label: dict.home.facts.focus, value: dict.home.factValues.focus },
    { label: dict.home.facts.status, value: dict.home.factValues.status, accent: true },
  ];

  return (
    <div className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-16">
      <section className="grid grid-cols-1 gap-y-14 border-b border-rule pb-16 pt-14 sm:pt-20 lg:grid-cols-12 lg:gap-x-6 lg:pb-22 lg:pt-24">
        <div className="flex flex-col gap-7 lg:col-span-7">
          <h1 className="font-mono text-[2rem] font-medium leading-[1.15] tracking-[-0.02em] sm:text-[2.5rem] lg:text-5xl">
            {dict.home.titleStart}
            <span className="text-accent">{dict.home.titleAccent}</span>
            {dict.home.titleEnd}
          </h1>
          <p className="max-w-[600px] text-lg leading-relaxed text-fg-3 sm:text-xl">
            {dict.home.description}
          </p>
        </div>

        <dl className="grid grid-cols-[96px_minmax(0,1fr)] self-end border-t border-rule font-mono text-[13px] leading-normal lg:col-span-4 lg:col-start-9">
          {facts.map((fact) => (
            <div key={fact.label} className="contents">
              <dt className="border-b border-rule py-3 text-muted">{fact.label}</dt>
              <dd className={`border-b border-rule py-3 ${fact.accent ? "text-accent" : ""}`}>{fact.value}</dd>
            </div>
          ))}
          <dd className="col-span-2 pt-4">
            <Link href={localePath(lang, "/about")} className="text-accent transition-colors hover:text-fg">
              {dict.home.fullCv} →
            </Link>
          </dd>
        </dl>
      </section>

      <section className="pb-24 pt-16 lg:pt-18">
        <div className="mb-5 flex items-baseline justify-between font-mono text-[13px]">
          <h2 className="font-medium uppercase tracking-[0.08em] text-muted">{dict.home.latest}</h2>
          <Link href={localePath(lang, "/blog")} className="text-fg transition-colors hover:text-accent">
            {dict.home.allArticles} →
          </Link>
        </div>
        <ArticleIndex posts={latestPosts} emptyText={dict.home.empty} />
      </section>
    </div>
  );
}
