import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import {
  HiOutlineShieldCheck,
  HiOutlineCommandLine,
  HiOutlineAcademicCap,
  HiOutlineEnvelope,
} from "react-icons/hi2";

export const metadata: Metadata = {
  title: "O mně",
  description:
    "Milan Jakubec – kybernetická bezpečnost, AppSec. Kdo jsem a proč píšu tento blog.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-3">
          <span className="text-[var(--accent)] font-mono">$</span> O mně
        </h1>
        <p className="text-[var(--text-secondary)] text-lg">
          Kdo je ten &quot;kyberbezpečák&quot;?
        </p>
      </div>

      {/* About section */}
      <section className="mb-16">
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-8">
          {/* Terminal-style header */}
          <div className="flex items-center gap-2 mb-6 font-mono text-sm text-[var(--text-muted)]">
            <span className="text-[var(--accent)]">$</span>
            <span>cat /home/milan/about.txt</span>
          </div>

          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
            <p>
              Ahoj! Jmenuju se <strong className="text-[var(--text-primary)]">Milan Jakubec</strong> a
              tenhle blog slouží jako moje veřejná osobní knowledge base zaměřená na kyber.
              Aktuálně pracuju ve firmě Edhouse jako AppSec Engineer, kde se věnuju bezpečnosti softwaru a SSDLC (secure software development lifecycle).
              Předtím jsem rok pracoval jako backend developer na volné noze. Co do studia, aktuálně jsem student kyberbezpečnosti na FAI UTB, předtím jsem vystudoval bakaláře na FIT VUT v Brně.
            </p>
            <p>
              Rád píšu a psaní mi vždycky docela šlo, všichni víme, že Feynmanova technika funguje a zároveň mi chybí nějaké ucelené místo, s pomocí kterého bych mohl trackovat vlastní progress a mít možnost se vrátít třeba k nějaké starší myšlence nebo problematice.
              Sdílím tady svoje zkušenosti, poznámky a postřehy z oblasti bezpečnosti – od aplikační bezpečnosti (AppSec), což je přímo moje doména, ale i z oblastí bezpečnosti, o které se třeba zajímám, ale zatím v nich nemám tolik zkušeností, což je třeba pentesting a podobně.
            </p>
            <p>
              Cílem tohoto blogu je psát o tématech v kyber, co mě zajímají,
              a zároveň pomoci dalším lidem, kteří se do světa kyberbezpečnosti
              teprve dostávají, nebo se v něm chtějí zorientovat a něco se dozvědět. Já sám bych takový blog v minulosti ocenil, protože spousta informací je rozesetá po různých fórech, blogech, YouTube kanálech a podobně, a není úplně jednoduché se v tom všem zorientovat.
            </p>
          </div>

          {/* Skill cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {[
              {
                icon: HiOutlineShieldCheck,
                title: "AppSec",
                desc: "Bezpečnost aplikací, OWASP, code review",
              },
              {
                icon: HiOutlineCommandLine,
                title: "Red & Blue Team",
                desc: "Ofenzivní i defenzivní bezpečnost",
              },
              {
                icon: HiOutlineAcademicCap,
                title: "CTF & Vzdělávání",
                desc: "Certifikace, self-study",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)]"
              >
                <Icon className="w-6 h-6 text-[var(--accent)] mb-2" />
                <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-1">
                  {title}
                </h3>
                <p className="text-xs text-[var(--text-muted)]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <HiOutlineEnvelope className="w-6 h-6 text-[var(--accent)]" />
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">
            Kontakt
          </h2>
        </div>
        <p className="text-[var(--text-secondary)] mb-8">
          Máš dotaz, feedback nebo nápad na spolupráci? Napiš mi.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-8">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
