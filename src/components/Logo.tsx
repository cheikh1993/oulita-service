import Link from "next/link";
import { site } from "@/lib/site";

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {/* nest */}
      <path
        d="M6 24c2.6 4 7.6 6.5 14 6.5S31.4 28 34 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9 20.5c2.2 3 6.2 5 11 5s8.8-2 11-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />
      {/* egg / heart nestled inside */}
      <path
        d="M20 8c3.4 0 6 2.7 6 6.3 0 4-3.2 6.7-6 8.7-2.8-2-6-4.7-6-8.7C14 10.7 16.6 8 20 8z"
        fill="currentColor"
        opacity="0.16"
      />
      <path
        d="M20 21.5c-2.4-1.8-4.7-3.9-4.7-6.7A2.7 2.7 0 0120 12.6a2.7 2.7 0 014.7 2.2c0 2.8-2.3 4.9-4.7 6.7z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Logo({
  className = "",
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label={`${site.name} — home`}
    >
      <LogoMark className="h-9 w-9 text-sage transition-colors group-hover:text-sage-deep" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-semibold tracking-tight text-ink">
          {site.name}
        </span>
        <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
          {site.tagline}
        </span>
      </span>
    </Link>
  );
}
