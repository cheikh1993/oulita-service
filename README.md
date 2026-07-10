# Little Nest — Newborn & Postpartum Care

A small, elegant marketing website for a boutique newborn-care agency, built with
**Next.js (App Router) + TypeScript + Tailwind CSS**. It's a reduced, single-agency
take on sites like hushhushlittlebaby.com — warm, calm and easy to maintain.

## Pages

- **Home** (`/`) — hero, trust badges, services, founder intro, how it works, testimonials, CTA
- **Services** (`/services`) — detailed services, FAQ
- **About** (`/about`) — story, values, stats
- **Contact** (`/contact`) — contact details + working contact form

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

Build for production:

```bash
npm run build
npm start
```

## Editing content — start here

**Almost everything lives in one file: [`src/lib/site.ts`](src/lib/site.ts).**
Brand name, contact details, services, values, testimonials and FAQ are all there —
no need to touch components to change the copy.

Things you'll want to replace:

| What | Where |
| --- | --- |
| Brand name & tagline | `site.name`, `site.tagline` in `src/lib/site.ts` |
| Founder name | `site.founder` |
| Email / phone / city / hours | top of `src/lib/site.ts` |
| Social links | `site.social` |
| Services & prices | `services` array |
| Real testimonials | `testimonials` array |
| Favicon | `src/app/icon.svg` |

### Photos

The site currently uses tasteful placeholder graphics (the hero illustration and
the founder monogram) so nothing looks broken before you have imagery. To add real
photos, drop files in `public/` and swap the placeholder blocks in
`src/app/page.tsx` (hero + founder) and `src/app/about/page.tsx` for
`next/image` components.

### Contact form

The form posts to `src/app/api/contact/route.ts`, which validates the submission
and logs it. To actually **receive** enquiries, follow the `TODO` in that file to
plug in an email provider (e.g. [Resend](https://resend.com)) or a webhook.

## Design tokens

Colours and fonts are defined in [`tailwind.config.ts`](tailwind.config.ts)
(palette: warm cream + sage + blush; fonts: Fraunces + Nunito).

## Deploy

Deploys cleanly to [Vercel](https://vercel.com) (zero config for Next.js) or any
Node host: `npm run build` then `npm start`.
