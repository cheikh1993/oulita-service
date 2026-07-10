import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Brand mark — a deep-plum roundel with a champagne-gold crescent
 * cradling a little heart, echoing the Watch The Baby logo
 * (mother, moon and baby in gold on plum).
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden="true">
      {/* plum roundel */}
      <circle cx="20" cy="20" r="19" fill="#4A2650" />
      <circle cx="20" cy="20" r="17.4" stroke="#E4C695" strokeWidth="0.8" opacity="0.5" />
      {/* gold crescent cradle */}
      <circle cx="20" cy="19.5" r="10.5" fill="#E4C695" />
      <circle cx="20" cy="16" r="9.6" fill="#4A2650" />
      {/* heart — the baby, held in the cradle */}
      <path
        d="M20 21.5c-2.7-1.9-4.7-4-4.7-6.1 0-1.5 1.2-2.6 2.6-2.6.8 0 1.6.4 2.1 1 .5-.6 1.3-1 2.1-1 1.4 0 2.6 1.1 2.6 2.6 0 2.1-2 4.2-4.7 6.1z"
        fill="#E4C695"
      />
      {/* watchful star */}
      <path d="M28.6 9.2l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z" fill="#E4C695" />
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
      <LogoMark className="h-10 w-10" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-semibold italic tracking-tight text-plum transition-colors group-hover:text-plum-deep">
          {site.name}
        </span>
        <span className="mt-1 text-[9.5px] font-bold uppercase tracking-[0.2em] text-gold-deep">
          {site.tagline}
        </span>
      </span>
    </Link>
  );
}
