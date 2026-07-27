import Link from "next/link";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 text-center">
      <HiOutlineExclamationTriangle className="w-16 h-16 text-[var(--accent)] mx-auto mb-6" />

      <div className="font-mono text-sm text-[var(--text-muted)] mb-4">
        <span className="text-[var(--accent)]">$</span> curl -I /this-page
        <br />
        <span className="text-red-400">HTTP/1.1 404 Not Found</span>
      </div>

      <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-3">
        404
      </h1>
      <p className="text-lg text-[var(--text-secondary)] mb-8">
        Page not found / Stránka nenalezena
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white dark:text-black font-semibold text-sm transition-colors"
      >
        ← Home
      </Link>
    </div>
  );
}
