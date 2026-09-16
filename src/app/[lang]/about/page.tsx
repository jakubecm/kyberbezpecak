import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { CERTIFICATIONS, CREDLY_URL } from "@/data/certifications";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return {
    title: dict.about.title,
    description: dict.about.metaDescription,
  };
}

function SectionHeading({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <h2 className="mb-5 font-mono text-[13px] font-medium uppercase tracking-[0.08em] text-muted">
      <span className="text-accent">{n}</span>
      <span className="ml-3">{children}</span>
    </h2>
  );
}

const TAG = "border border-rule-strong px-2 py-0.5 font-mono text-xs";

export default async function AboutPage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const { about } = dict;

  const facts = [
    { label: about.facts.work, value: about.factValues.work },
    { label: about.facts.study, value: about.factValues.study },
    { label: "github", value: "jakubecm", href: "https://github.com/jakubecm" },
    { label: "linkedin", value: "milan-jakubec", href: "https://www.linkedin.com/in/milan-jakubec/" },
  ];

  return (
    <div className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-16">
      {/* Intro */}
      <section className="grid grid-cols-1 gap-y-12 pb-20 pt-14 sm:pt-20 lg:grid-cols-12 lg:gap-x-6 lg:pt-22">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <span className="font-mono text-[13px] uppercase tracking-[0.08em] text-muted">{about.eyebrow}</span>
          <h1 className="font-mono text-[2.5rem] font-medium leading-[1.05] tracking-[-0.03em] sm:text-[3.5rem]">
            {about.name}
          </h1>
          <p className="font-mono text-lg text-accent">{about.headline}</p>
          <div className="flex max-w-[640px] flex-col gap-4 pt-2 text-lg leading-[1.7] text-fg-2">
            {about.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="pt-4">
            <a
              href="#contact"
              className="inline-block bg-accent px-5 py-3.5 font-mono text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
            >
              {about.writeMe} →
            </a>
          </div>
        </div>

        <div className="max-w-sm lg:col-span-4 lg:col-start-9 lg:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
            <Image
              src="/portret.jpg"
              alt={about.name}
              fill
              priority
              sizes="(max-width: 1024px) 384px, 368px"
              className="object-cover object-[50%_18%]"
            />
          </div>
          <dl className="grid grid-cols-[96px_minmax(0,1fr)] font-mono text-[13px] leading-normal">
            {facts.map((fact) => (
              <div key={fact.label} className="contents">
                <dt className="border-b border-rule py-3 text-muted">{fact.label}</dt>
                <dd className="border-b border-rule py-3">
                  {fact.href ? (
                    <a href={fact.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                      {fact.value}
                    </a>
                  ) : (
                    fact.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 01 Experience */}
      <section className="pt-4">
        <SectionHeading n="01">{about.sections.experience}</SectionHeading>
        <ol className="border-t border-fg">
          {about.experience.map((job) => (
            <li
              key={job.title}
              className="grid grid-cols-1 gap-y-3 border-b border-rule py-8 md:grid-cols-[200px_minmax(0,1fr)] md:gap-x-8 lg:grid-cols-[200px_minmax(0,1fr)_260px]"
            >
              <span className="pt-1.5 font-mono text-[13px] text-muted">
                {job.period}
                {job.current && <span className="text-accent">{about.now}</span>}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-medium leading-snug">{job.title}</h3>
                <span className="font-mono text-[13px] text-muted">{job.meta}</span>
                {job.text && <p className="mt-2 text-[17px] leading-[1.65] text-fg-2">{job.text}</p>}
                {job.roles && (
                  <ol className="mt-4 flex flex-col gap-5 border-l border-rule-strong">
                    {job.roles.map((role) => (
                      <li key={role.title} className="flex flex-col gap-1 pl-6">
                        <span className="text-lg font-medium">
                          {role.title}
                          <span className="ml-3 font-mono text-xs font-normal text-muted">{role.period}</span>
                        </span>
                        <span className="text-base leading-relaxed text-fg-3">{role.text}</span>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
              <ul className="flex flex-wrap content-start gap-2 pt-1.5 md:col-start-2 lg:col-start-3 lg:justify-end">
                {job.tags.map((tag) => (
                  <li key={tag} className={TAG}>
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* 02 Education */}
      <section className="pt-20">
        <SectionHeading n="02">{about.sections.education}</SectionHeading>
        <ul className="grid grid-cols-1 border-t border-fg md:grid-cols-2 md:gap-x-6">
          {about.education.map((item) => (
            <li key={item.school} className="flex flex-col gap-1.5 border-b border-rule py-6">
              <span className="font-mono text-[13px] text-muted">
                {item.period}
                {item.ongoing && <span className="text-accent"> · {about.ongoing}</span>}
              </span>
              <span className="text-xl font-medium">{item.degree}</span>
              <span className="text-base text-fg-3">{item.school}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 03 Certifications */}
      <section className="pt-20">
        <SectionHeading n="03">{about.sections.certifications}</SectionHeading>
        <div
          aria-hidden="true"
          className="hidden border-t border-fg py-3 font-mono text-xs uppercase text-muted md:grid md:grid-cols-[minmax(0,1fr)_140px_100px_160px] md:gap-x-6"
        >
          <span>{about.certTable.name}</span>
          <span>{about.certTable.issuer}</span>
          <span>{about.certTable.issued}</span>
          <span className="text-right">{about.certTable.validity}</span>
        </div>
        <ul className="border-t border-fg md:border-t-0">
          {CERTIFICATIONS.map((cert) => (
            <li
              key={cert.name}
              className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-1 border-b border-rule py-4 md:grid-cols-[minmax(0,1fr)_140px_100px_160px] md:items-baseline md:gap-x-6"
            >
              <span className={`col-span-2 text-lg font-medium md:col-span-1 ${cert.expired ? "text-muted" : ""}`}>
                {cert.name}
              </span>
              <span className="text-[15px] text-fg-3">
                {cert.issuer}
                <span className="font-mono text-[13px] text-muted md:hidden"> · {cert.issued}</span>
              </span>
              <span className="hidden font-mono text-[13px] text-muted md:block">{cert.issued}</span>
              <span className={`text-right font-mono text-xs ${cert.expired ? "text-faint" : "text-muted"}`}>
                {cert.expired ? `${about.certTable.expired} ${cert.expired}` : about.certTable.noExpiry}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex justify-end pt-4">
          <a
            href={CREDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[13px] text-accent transition-colors hover:text-fg"
          >
            {about.verifyCredly} →
          </a>
        </div>
      </section>

      {/* 04 Skills */}
      <section className="pt-20">
        <SectionHeading n="04">{about.sections.skills}</SectionHeading>
        <div className="grid grid-cols-1 border-l border-t border-l-rule border-t-fg sm:grid-cols-2 lg:grid-cols-4">
          {about.skills.map((group) => (
            <div key={group.key} className="flex flex-col gap-3 border-b border-r border-rule p-6">
              <span className="font-mono text-xs text-accent">{group.key}</span>
              <ul className="text-base leading-[1.8] text-fg-2">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 05 Contact */}
      <section
        id="contact"
        className="grid scroll-mt-8 grid-cols-1 gap-y-10 pb-24 pt-24 lg:grid-cols-12 lg:gap-x-6"
      >
        <div className="flex flex-col gap-4 lg:col-span-4">
          <SectionHeading n="05">{about.sections.contact}</SectionHeading>
          <p className="font-mono text-[1.75rem] font-medium leading-tight">{about.contactTitle}</p>
          <p className="text-[17px] leading-relaxed text-fg-3">{about.contactDescription}</p>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
