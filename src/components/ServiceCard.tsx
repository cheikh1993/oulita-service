import Link from "next/link";
import { Icon, type IconName } from "./Icons";
import type { Service } from "@/lib/site";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services#${service.slug}`}
      className="group surface-card flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sage/40 hover:shadow-lift"
    >
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-soft text-sage-deep transition-colors group-hover:bg-sage group-hover:text-white">
        <Icon name={service.icon as IconName} className="h-7 w-7" />
      </span>

      <h3 className="mt-6 font-display text-xl font-semibold text-ink">
        {service.title}
      </h3>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">
        {service.summary}
      </p>

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-sage-deep">
        Learn more
        <Icon
          name="arrow-right"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
