import type { SVGProps } from "react";
import {
  ArrowRight,
  BedDouble,
  BookOpen,
  Camera,
  Check,
  Clock,
  Flower2,
  Gift,
  Heart,
  HeartHandshake,
  HeartPulse,
  Leaf,
  Mail,
  MapPin,
  Menu,
  MessageCircleHeart,
  Milk,
  MoonStar,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  X,
  type LucideIcon,
} from "lucide-react";

type IconProps = SVGProps<SVGSVGElement> & { name: IconName };

export type IconName =
  | "shield"
  | "heart-pulse"
  | "leaf"
  | "moon"
  | "hands"
  | "bottle"
  | "heart"
  | "sparkle"
  | "check"
  | "arrow-right"
  | "menu"
  | "close"
  | "phone"
  | "mail"
  | "map-pin"
  | "clock"
  | "instagram"
  | "facebook"
  | "tiktok"
  | "quote"
  | "star"
  | "zzz"
  | "sun"
  | "book"
  | "spa"
  | "chat-heart"
  | "gift"
  | "camera";

/**
 * Modern icon set powered by lucide-react, exposed through the same
 * `<Icon name="…" />` API the whole site already uses. Instagram and
 * Facebook keep bespoke paths (lucide no longer ships brand icons).
 */
const lucideIcons: Partial<Record<IconName, LucideIcon>> = {
  shield: ShieldCheck,
  "heart-pulse": HeartPulse,
  leaf: Leaf,
  moon: MoonStar,
  hands: HeartHandshake,
  bottle: Milk,
  heart: Heart,
  sparkle: Sparkles,
  check: Check,
  "arrow-right": ArrowRight,
  menu: Menu,
  close: X,
  phone: Phone,
  mail: Mail,
  "map-pin": MapPin,
  clock: Clock,
  quote: Quote,
  star: Star,
  zzz: BedDouble,
  sun: Sun,
  book: BookOpen,
  spa: Flower2,
  "chat-heart": MessageCircleHeart,
  gift: Gift,
  camera: Camera,
};

const brandPaths: Partial<Record<IconName, React.ReactNode>> = {
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.2" />
      <circle cx="16.5" cy="7.5" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: (
    <path d="M14.5 8.5H16V6h-1.8c-1.9 0-3.2 1.2-3.2 3.2V11H9v2.6h2v6.4h2.6v-6.4h2.1l.4-2.6h-2.5V9.6c0-.7.3-1.1 1.4-1.1z" />
  ),
  tiktok: (
    <path
      d="M16.6 5.82A4.28 4.28 0 0115.54 3h-3.09v12.4a2.59 2.59 0 01-2.59 2.5 2.6 2.6 0 01-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 004.3 1.38V7.3s-1.88.09-3.24-1.48z"
      fill="currentColor"
      stroke="none"
    />
  ),
};

export function Icon({ name, ...props }: IconProps) {
  const Lucide = lucideIcons[name];
  if (Lucide) {
    return <Lucide strokeWidth={1.8} aria-hidden="true" {...props} />;
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {brandPaths[name]}
    </svg>
  );
}
