import { Button } from "@/components/Button";
import { LogoMark } from "@/components/Logo";

export default function NotFound() {
  return (
    <section className="container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <LogoMark className="h-14 w-14 text-sage" />
      <p className="mt-6 font-display text-6xl font-semibold text-ink">404</p>
      <h1 className="mt-3 font-display text-2xl font-semibold text-ink">
        This page is having a little nap
      </h1>
      <p className="mt-3 max-w-sm leading-relaxed text-ink-soft">
        We couldn&apos;t find the page you were looking for. Let&apos;s get you
        back to somewhere cosy.
      </p>
      <div className="mt-8">
        <Button href="/" withArrow>
          Back to home
        </Button>
      </div>
    </section>
  );
}
