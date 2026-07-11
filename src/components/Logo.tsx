import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

/** Full brand lockup — the real Watch The Baby logo (mother, moon, wordmark). */
export function LogoImage({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/logo.png"
      alt={`${site.name} — ${site.tagline}`}
      width={814}
      height={473}
      priority
      className={className}
    />
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
      className={`inline-flex items-center ${className}`}
      aria-label={`${site.name} — home`}
    >
      <LogoImage className="h-16 w-auto transition-transform duration-300 hover:scale-[1.04] motion-reduce:transition-none" />
    </Link>
  );
}
