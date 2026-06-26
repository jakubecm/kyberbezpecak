"use client";

import { useState, type FormEvent } from "react";
import { HiOutlineEnvelope } from "react-icons/hi2";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Placeholder – napojení na službu (Mailchimp, ConvertKit) se přidá později
    if (email) {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section className="relative rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-8 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-glow)] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--accent-glow)] mb-4">
          <HiOutlineEnvelope className="w-6 h-6 text-[var(--accent)]" />
        </div>
        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
          Zůstaň v obraze
        </h3>
        <p className="text-sm text-[var(--text-secondary)] mb-5">
          Přihlaš se k odběru a dostávej nové články přímo do schránky (až se rozhoupu rozhchodit napojení na službu ;)).
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tvuj@email.cz"
            required
            className="flex-1 px-4 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors"
          />
          <button
            type="submit"
            className="px-6 py-2.5 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white dark:text-black font-semibold text-sm transition-colors cursor-pointer whitespace-nowrap"
          >
            Odebírat
          </button>
        </form>

        {status === "success" && (
          <p className="mt-3 text-sm text-[var(--accent)] font-medium">
            ✓ Díky za přihlášení! (Zatím ti nebude chodít nic, napojení na službu bude snad brzy.)
          </p>
        )}
      </div>
    </section>
  );
}
