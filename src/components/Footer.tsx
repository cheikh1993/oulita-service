import Link from "next/link";
import { LogoMark } from "./Logo";
import { Icon } from "./Icons";
import { nav, services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-sage-tint/60">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-9 w-9 text-sage" />
              <span className="font-display text-xl font-semibold text-ink">
                {site.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              A boutique newborn &amp; postpartum care studio in {site.city},
              supporting new families through the first tender weeks.
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink-soft transition-colors hover:border-sage hover:text-sage-deep"
              >
                <Icon name="instagram" className="h-5 w-5" />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink-soft transition-colors hover:border-sage hover:text-sage-deep"
              >
                <Icon name="facebook" className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-ink-muted">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink-soft transition-colors hover:text-sage-deep"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-ink-muted">
              Services
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-ink-soft transition-colors hover:text-sage-deep"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-ink-muted">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2.5 text-ink-soft transition-colors hover:text-sage-deep"
                >
                  <Icon name="mail" className="h-4 w-4 text-sage" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2.5 text-ink-soft transition-colors hover:text-sage-deep"
                >
                  <Icon name="phone" className="h-4 w-4 text-sage" />
                  {site.phone}
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5 text-ink-soft">
                <Icon name="map-pin" className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                {site.serviceArea}
              </li>
            </ul>
          </div>
        </div>

        {/* Inclusivity note */}
        <p className="mt-14 max-w-3xl border-t border-line pt-8 text-sm leading-relaxed text-ink-soft">
          We warmly support every family — every structure, every background,
          every feeding and parenting choice. You are welcome here.
        </p>

        <div className="mt-8 flex flex-col gap-3 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>
            Made with care in {site.city}. · Est. {site.establishedYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
