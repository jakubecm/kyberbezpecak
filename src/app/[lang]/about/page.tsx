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
import Image from "next/image";

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

          <div className="text-[var(--text-secondary)] leading-relaxed">
            <div className="float-none sm:float-left mb-6 sm:mr-8 sm:mb-4 w-full sm:w-72 md:w-80">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-[var(--border-color)] shadow-md">
                <Image
                  src="/portret.jpg"
                  alt="Milan Jakubec"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 288px, 320px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            <div className="space-y-4">
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

            
            <div className="clear-both" />
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
