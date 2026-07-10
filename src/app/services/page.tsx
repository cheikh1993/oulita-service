import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon, type IconName } from "@/components/Icons";
import { services, faqs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Overnight newborn care, postpartum doula support and gentle sleep & feeding guidance — boutique care for the fourth trimester.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title="Care for the fourth trimester"
        description="We keep our offering small and personal — just the support that makes the biggest difference in those first weeks at home."
      />

      {/* Detailed services */}
      <section className="container py-16 sm:py-20">
        <div className="flex flex-col gap-6">
          {services.map((service, i) => (
            <Reveal key={service.slug}>
              <article
                id={service.slug}
                className="surface-card grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:items-center"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-soft text-sage-deep">
                    <Icon name={service.icon as IconName} className="h-7 w-7" />
                  </span>
                  <h2 className="mt-5 font-display text-2xl font-semibold text-ink sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                    {service.description}
                  </p>
                  <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-blush-tint px-4 py-1.5 text-sm font-semibold text-blush">
                    <Icon name="sparkle" className="h-4 w-4" />
                    {service.priceNote}
                  </p>
                </div>

                <div
                  className={`rounded-4xl bg-sage-tint/70 p-7 ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-sage-deep">
                    What&apos;s included
                  </h3>
                  <ul className="mt-5 space-y-3.5">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage text-white">
                          <Icon name="check" className="h-3.5 w-3.5" />
                        </span>
                        <span className="leading-relaxed text-ink-soft">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-12 sm:py-16">
        <Reveal>
          <SectionHeading
            eyebrow="Good to know"
            title="Frequently asked questions"
          />
        </Reveal>
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-line overflow-hidden rounded-4xl border border-line bg-surface">
          {faqs.map((faq) => (
            <details key={faq.q} className="group px-6 sm:px-8">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-lg font-semibold text-ink marker:hidden">
                {faq.q}
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-soft text-sage-deep transition-transform duration-300 group-open:rotate-45">
                  <Icon name="close" className="h-4 w-4 rotate-45" />
                </span>
              </summary>
              <p className="pb-5 pr-12 leading-relaxed text-ink-soft">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16">
        <Reveal className="surface-card flex flex-col items-center gap-6 p-10 text-center sm:p-14">
          <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Not sure which service fits? Let&apos;s figure it out together.
          </h2>
          <p className="max-w-lg text-lg leading-relaxed text-ink-soft">
            Every family is different. Book a free consultation and we&apos;ll
            recommend the right support — no pressure, no obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/contact" size="lg" withArrow>
              Book a free consultation
            </Button>
            <Button href={site.phoneHref} size="lg" variant="secondary">
              Call {site.phone}
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
