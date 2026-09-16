import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col gap-6 border-b border-rule py-24 sm:py-32">
        <span className="font-mono text-[13px] text-accent">HTTP/1.1 404 Not Found</span>
        <h1 className="font-mono text-4xl font-medium tracking-[-0.02em] sm:text-5xl">
          Tahle stránka neexistuje.
        </h1>
        <p className="text-lg text-fg-3">This page doesn&apos;t exist.</p>
        <div className="flex gap-6 pt-4 font-mono text-[13px]">
          <Link href="/" className="text-fg transition-colors hover:text-accent">
            ← Domů
          </Link>
          <Link href="/en" className="text-fg transition-colors hover:text-accent">
            ← Home
          </Link>
        </div>
      </div>
    </div>
  );
}
