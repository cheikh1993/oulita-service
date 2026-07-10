import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon, type IconName } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { values, site } from "@/lib/site";
import { getBaseUrl, pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description: `Meet ${site.name}, a boutique newborn and postpartum care studio founded by ${site.founder} in ${site.city}.`,
  path: "/about",
});

const stats = [
  { value: "1-to-1", label: "Personal, direct care" },
  { value: "100%", label: "Vetted & certified caregivers" },
  { value: `Est. ${site.establishedYear}`, label: `Proudly new in ${site.city}` },
];

export default function AboutPage() {
  const baseUrl = getBaseUrl();
  return (
    <>
      <JsonLd
        data={breadcrumbSchema(baseUrl, [
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHeader
        eyebrow="About us"
        title="A calmer, kinder fourth trimester"
        description={`${site.name} is a small newborn and postpartum care studio. We began just a couple of months ago with one belief: new families deserve steady, expert hands — and real rest.`}
      />

      {/* Story */}
      <section className="container py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-sage-soft via-sage-tint to-blush-soft p-8">
                <div className="flex min-h-[300px] items-center justify-center">
                  <div className="relative">
                    <div className="flex h-40 w-40 items-center justify-center rounded-full border border-white/70 bg-white/60 shadow-soft backdrop-blur">
                      <span className="font-display text-5xl font-semibold text-sage-deep">
                        {site.founder.charAt(0)}
                      </span>
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-line bg-surface px-4 py-1.5 text-sm font-semibold text-ink shadow-soft">
                      {site.founder}, Founder
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center text-sm text-ink-muted">
                Replace this with a warm photo of the founder.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="prose-neutral">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink">
                Our story
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
                <p>
                  Bringing a baby home is one of life&apos;s most beautiful
                  moments — and one of its most exhausting. In those first
                  weeks, a little expert support can change everything.
                </p>
                <p>
                  {site.name} was founded by {site.founder} to offer exactly
                  that: warm, knowledgeable, hands-on care for newborns and the
                  parents who love them. We&apos;re new, and we&apos;re proud of
                  it — being small means every family gets our full attention.
                </p>
                <p>
                  {site.promise}
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-3xl border border-line bg-surface p-6 text-center shadow-soft"
                  >
                    <div className="font-display text-2xl font-semibold text-sage-deep">
                      {s.value}
                    </div>
                    <div className="mt-1.5 text-sm leading-snug text-ink-soft">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="container py-16 sm:py-20">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="What we stand for"
            title="The values behind every visit"
            className="mx-auto"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="surface-card h-full p-7">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blush-soft text-blush">
                  <Icon name={v.icon as IconName} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                  {v.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">
                  {v.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16">
        <Reveal className="surface-card flex flex-col items-center gap-6 p-10 text-center sm:p-14">
          <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            We&apos;d love to meet your family
          </h2>
          <p className="max-w-lg text-lg leading-relaxed text-ink-soft">
            Tell us a little about your due date and what would help most.
            The first conversation is always free.
          </p>
          <Button href="/contact" size="lg" withArrow>
            Get in touch
          </Button>
        </Reveal>
      </section>
    </>
  );
}
