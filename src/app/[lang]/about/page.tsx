import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import {
  HiOutlineShieldCheck,
  HiOutlineCommandLine,
  HiOutlineAcademicCap,
  HiOutlineEnvelope,
} from "react-icons/hi2";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

const skillIcons = [HiOutlineShieldCheck, HiOutlineCommandLine, HiOutlineAcademicCap];

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return {
    title: dict.about.title,
    description: dict.about.subtitle,
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-3">
          <span className="text-[var(--accent)] font-mono">$</span> {dict.about.title}
        </h1>
        <p className="text-[var(--text-secondary)] text-lg">
          {dict.about.subtitle}
        </p>
      </div>

      {/* About section */}
      <section className="mb-16">
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-8">
          {/* Terminal-style header */}
          <div className="flex items-center gap-2 mb-6 font-mono text-sm text-[var(--text-muted)]">
            <span className="text-[var(--accent)]">$</span>
            <span>{dict.about.terminalCmd}</span>
          </div>

          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
            {dict.about.bio.map((paragraph, i) => (
              <p key={i}>
                {i === 0 ? (
                  <>
                    {paragraph.split("{name}")[0]}
                    <strong className="text-[var(--text-primary)]">{dict.about.bioName}</strong>
                    {paragraph.split("{name}")[1]}
                  </>
                ) : (
                  paragraph
                )}
              </p>
            ))}
          </div>

          {/* Skill cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {dict.about.skills.map((skill, i) => {
              const Icon = skillIcons[i];
              return (
                <div
                  key={skill.title}
                  className="p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)]"
                >
                  <Icon className="w-6 h-6 text-[var(--accent)] mb-2" />
                  <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-1">
                    {skill.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)]">{skill.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <HiOutlineEnvelope className="w-6 h-6 text-[var(--accent)]" />
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">
            {dict.about.contact}
          </h2>
        </div>
        <p className="text-[var(--text-secondary)] mb-8">
          {dict.about.contactDescription}
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-8">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
