# Photos — what to drop in here

The site is wired for real photos. Add the files below to this folder, then set
the matching paths in **`src/lib/site.ts` → `site.images`** — that's all.
Until a path is set, the site shows an elegant branded placeholder.

| File (suggested)   | Where it appears            | Ideal shot                                        | Size (approx.) |
| ------------------ | --------------------------- | ------------------------------------------------- | -------------- |
| `hero.jpg`         | Home — hero (right side)    | Caregiver holding / soothing a sleeping newborn   | 1000 × 1080    |
| `founder.jpg`      | Home + About — founder card | Warm portrait of Oulimata (smiling, soft light)   | 800 × 1000     |

Example — in `src/lib/site.ts`:

```ts
images: {
  hero: "/images/hero.jpg",
  founder: "/images/founder.jpg",
},
```

## Tips for the photoshoot

- Soft, natural light; calm neutral backgrounds (cream, beige, soft pink).
- Portrait (vertical) orientation for both shots.
- JPG at quality ~80 is plenty; Next.js optimises them automatically.
- Nice extras for later: nursery details, swaddled baby, hands holding tiny
  feet — usable on the Services page and social media.

> Only ever use photos you have the right to publish (your own shoots, or
> licensed stock). Get written consent from any family shown.
