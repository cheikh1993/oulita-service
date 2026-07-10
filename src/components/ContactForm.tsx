"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "./Icons";
import { services } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full rounded-2xl border border-line bg-cream/60 px-4 py-3 text-ink placeholder:text-ink-muted transition-colors focus:border-sage focus:bg-surface focus:outline-none focus:ring-2 focus:ring-sage/30";
const labelClass = "mb-1.5 block text-sm font-semibold text-ink";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError(
        "Something went wrong sending your message. Please email us directly and we'll reply right away.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-4xl border border-sage/30 bg-sage-tint/70 p-10 text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-sage text-white">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
          Thank you — message received!
        </h3>
        <p className="mt-3 max-w-sm leading-relaxed text-ink-soft">
          We&apos;ll be in touch within one business day to arrange your free
          consultation. Talk soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-sage-deep underline underline-offset-4 hover:text-sage"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="surface-card p-7 sm:p-9" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name <span className="text-blush">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Aïssatou Diop"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-blush">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@email.com"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+221 …"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="service" className={labelClass}>
            I&apos;m interested in
          </label>
          <select id="service" name="service" className={fieldClass} defaultValue="">
            <option value="" disabled>
              Choose a service…
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet — help me choose</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="timing" className={labelClass}>
          Due date or baby&apos;s age
        </label>
        <input
          id="timing"
          name="timing"
          type="text"
          placeholder="e.g. due in March, or baby is 3 weeks old"
          className={fieldClass}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          How can we help? <span className="text-blush">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us a little about what you're looking for…"
          className={`${fieldClass} resize-y`}
        />
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="mt-5 rounded-2xl border border-blush/40 bg-blush-tint px-4 py-3 text-sm text-ink"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group/btn mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-sage px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-sage-deep hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:pointer-events-none disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? (
          "Sending…"
        ) : (
          <>
            Send message
            <Icon
              name="arrow-right"
              className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1"
            />
          </>
        )}
      </button>

      <p className="mt-4 text-xs leading-relaxed text-ink-muted">
        By sending this message you agree to be contacted about your enquiry.
        We&apos;ll never share your details.
      </p>
    </form>
  );
}
