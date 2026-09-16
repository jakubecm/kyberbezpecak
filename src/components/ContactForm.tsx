"use client";

import { useState, type FormEvent } from "react";
import { type ContactFormData, type ApiResponse } from "@/types";
import { useDictionary } from "@/i18n/DictionaryProvider";

export function ContactForm() {
  const { dict } = useDictionary();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, website: honeypot }),
      });

      const data: ApiResponse = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.message);
      }
    } catch {
      setStatus("error");
      setErrorMsg(dict.contact.error);
    }
  };

  const inputClasses =
    "w-full border border-rule bg-surface px-4 py-3.5 text-base text-fg placeholder:text-faint focus:border-accent focus:outline-none transition-colors";
  const labelClasses = "mb-2 block font-mono text-xs uppercase tracking-[0.04em] text-muted";

  return (
    <form onSubmit={handleSubmit} className="relative space-y-5">
      {/* Honeypot – hidden from real users, bots will fill it */}
      <div className="absolute opacity-0 top-0 left-0 h-0 w-0 -z-10" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClasses}>
            {dict.contact.name}
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder={dict.contact.namePlaceholder}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            {dict.contact.email}
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder={dict.contact.emailPlaceholder}
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={labelClasses}>
          {dict.contact.subject}
        </label>
        <input
          type="text"
          id="subject"
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          placeholder={dict.contact.subjectPlaceholder}
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          {dict.contact.message}
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder={dict.contact.messagePlaceholder}
          className={`${inputClasses} resize-y`}
        />
      </div>

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p aria-live="polite" className="font-mono text-[13px]">
          {status === "success" && <span className="text-accent">✓ {dict.contact.success}</span>}
          {status === "error" && <span className="text-accent">✗ {errorMsg}</span>}
        </p>
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-accent px-6 py-3.5 font-mono text-sm font-medium text-accent-fg transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto cursor-pointer"
        >
          {status === "loading" ? dict.contact.sending : `${dict.contact.send} →`}
        </button>
      </div>
    </form>
  );
}
