/**
 * ────────────────────────────────────────────────────────────────
 *  SITE CONTENT — edit everything here.
 *  This single file drives every page: brand, contact details,
 *  services, values, testimonials and FAQ. No need to touch the
 *  components to update copy.
 *
 *  ⚠️  Replace the placeholder brand, contact info and quotes below
 *      with the agency's real details.
 * ────────────────────────────────────────────────────────────────
 */

export const site = {
  // ── Brand ──────────────────────────────────────────────────────
  name: "Little Nest",
  legalName: "Little Nest Newborn Care",
  tagline: "Newborn & Postpartum Care",
  founder: "Oulimata",
  establishedYear: 2026,
  domain: "littlenest.care",

  // ── Contact ────────────────────────────────────────────────────
  email: "hello@littlenest.care",
  phone: "+221 77 000 00 00",
  phoneHref: "tel:+22177000000",
  whatsapp: "+221 77 000 00 00",
  city: "Dakar",
  serviceArea: "Dakar and surrounding areas",
  hours: "Consultations Mon–Sat, 9am – 7pm · Overnight care available 7 days a week",

  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },

  // ── One-liners used across the site ────────────────────────────
  heroTitle: "Gentle, expert care for your growing family.",
  heroSubtitle:
    "A boutique newborn care studio supporting new parents through the first tender weeks — with warmth, rest, and calm, trusted hands.",
  promise:
    "We're a small, hands-on team. When you work with us, you work directly with the people caring for your family — never a call centre.",
};

// ── Trust badges (the reassurance strip) ─────────────────────────
export const credentials = [
  {
    icon: "shield",
    title: "Background-checked",
    text: "Every caregiver is vetted and reference-checked before joining.",
  },
  {
    icon: "heart-pulse",
    title: "CPR & First-Aid certified",
    text: "Infant CPR and first-aid trained, kept current every year.",
  },
  {
    icon: "leaf",
    title: "Fully insured",
    text: "Liability insurance and clear agreements on every booking.",
  },
];

// ── Services ─────────────────────────────────────────────────────
export type Service = {
  slug: string;
  icon: string;
  title: string;
  summary: string;
  description: string;
  includes: string[];
  priceNote: string;
};

export const services: Service[] = [
  {
    slug: "overnight-newborn-care",
    icon: "moon",
    title: "Overnight Newborn Care",
    summary:
      "Restful nights while a specialist tends to feeds, changes and settling — so you wake up rested.",
    description:
      "Our overnight specialists care for your baby through the night, handling feeds, diaper changes and soothing, then gently bringing baby to you for breastfeeding or offering a prepared bottle. You sleep; we watch over the nursery.",
    includes: [
      "Overnight shifts, typically 9–11 hours",
      "Feeding support — breast, bottle or combination",
      "Diapering, soothing and safe-sleep routines",
      "A tidy nursery and a written night log each morning",
    ],
    priceNote: "From a per-night rate · 1 to 7 nights a week",
  },
  {
    slug: "postpartum-doula-support",
    icon: "hands",
    title: "Postpartum Doula Support",
    summary:
      "Daytime support for you, not just the baby — recovery, feeding, meals and a steadying presence.",
    description:
      "A postpartum doula cares for the whole family in the fourth trimester: emotional support, help with feeding and recovery, light meal prep, and practical guidance so you can find your footing with confidence.",
    includes: [
      "Daytime visits shaped around your needs",
      "Newborn feeding and recovery support",
      "Light meal prep and nursery organisation",
      "Evidence-based guidance, judgement-free",
    ],
    priceNote: "Daytime blocks · booked weekly or as needed",
  },
  {
    slug: "sleep-and-feeding-guidance",
    icon: "bottle",
    title: "Sleep & Feeding Guidance",
    summary:
      "Gentle, age-appropriate plans for sleep and feeding, coached with you at your pace.",
    description:
      "A one-on-one consultation to understand your baby and your goals, followed by a gentle, realistic plan for sleep and feeding — with follow-up support so you're never left guessing.",
    includes: [
      "In-depth consultation and assessment",
      "A personalised, gentle sleep & feeding plan",
      "Follow-up check-ins and adjustments",
      "Simple guides you can keep and reuse",
    ],
    priceNote: "One-off consultation · follow-up packages available",
  },
];

// ── How it works ─────────────────────────────────────────────────
export const steps = [
  {
    number: "01",
    title: "Free consultation",
    text: "A relaxed call to understand your family, your due date and what would help most.",
  },
  {
    number: "02",
    title: "Your care plan",
    text: "We match you with the right caregiver and agree a simple, flexible schedule.",
  },
  {
    number: "03",
    title: "Rest easy",
    text: "Care begins. You stay in the loop with clear notes and a caregiver who knows your family.",
  },
];

// ── Values ───────────────────────────────────────────────────────
export const values = [
  {
    icon: "heart",
    title: "Warmth first",
    text: "Care that feels personal, calm and completely without judgement.",
  },
  {
    icon: "shield",
    title: "Safety always",
    text: "Vetted, trained caregivers and safe-sleep practices, every single visit.",
  },
  {
    icon: "sparkle",
    title: "Real expertise",
    text: "Practical, evidence-based support drawn from years of newborn experience.",
  },
  {
    icon: "leaf",
    title: "For every family",
    text: "We support all families — every structure, every feeding choice, every story.",
  },
];

// ── Testimonials (replace with real quotes) ──────────────────────
export const testimonials = [
  {
    quote:
      "Those first two weeks would have broken us without our night specialist. We finally slept, and woke up feeling human again.",
    name: "Aïssatou & Karim",
    detail: "First-time parents · Dakar",
  },
  {
    quote:
      "Kind, calm and genuinely knowledgeable. She gave us confidence with feeding when we had none.",
    name: "Fatou D.",
    detail: "Mother of two",
  },
  {
    quote:
      "It felt like having a wise, unflappable friend in the house. Worth every franc.",
    name: "Marième & Paul",
    detail: "Twins, 6 weeks",
  },
];

// ── FAQ ──────────────────────────────────────────────────────────
export const faqs = [
  {
    q: "When should we book?",
    a: "As early as you like — many families reach out in the second or third trimester. We also do our best to help with last-minute and newborn-in-arms requests.",
  },
  {
    q: "Are your caregivers vetted?",
    a: "Yes. Every caregiver is interviewed, reference-checked and background-checked, and holds current infant CPR and first-aid certification.",
  },
  {
    q: "Do you support breastfeeding, bottle and combination feeding?",
    a: "All of them. We support whatever feeding choice is right for your family, with zero judgement.",
  },
  {
    q: "What areas do you cover?",
    a: "We currently serve Dakar and the surrounding areas. If you're a little further out, get in touch and we'll see what's possible.",
  },
];

// ── Navigation ───────────────────────────────────────────────────
export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
