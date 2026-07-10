import type { SVGProps } from "react";

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
  | "quote"
  | "star";

const paths: Record<IconName, React.ReactNode> = {
  shield: (
    <path d="M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6l7-3z" />
  ),
  "heart-pulse": (
    <>
      <path d="M19.5 12.6L12 20l-7.5-7.4A4.6 4.6 0 0112 6a4.6 4.6 0 017.5 6.6z" />
      <path d="M4.8 12.5h3l1.4-2.3 2 4 1.5-2.5h4" />
    </>
  ),
  leaf: (
    <>
      <path d="M4 20c0-8 6-13 16-13 0 10-5 16-13 16a5 5 0 01-3-3z" />
      <path d="M9 15c2.5-2.5 5-4 8-4.5" />
    </>
  ),
  moon: <path d="M20 14.5A8 8 0 019.5 4 8 8 0 1020 14.5z" />,
  hands: (
    <>
      <path d="M6 11l3-3a1.6 1.6 0 012.3 0l3.4 3.4a2 2 0 01-.6 3.2L12 16" />
      <path d="M3 12.5l3 3 2 3.5M18 11l-2.5 2.5M14 8.5l2.2-2.2a1.6 1.6 0 012.3 2.3L14.8 12" />
    </>
  ),
  bottle: (
    <>
      <path d="M9 8.5h6v9a3 3 0 01-3 3 3 3 0 01-3-3v-9z" />
      <path d="M9.5 5.5h5l-.7 3h-3.6l-.7-3z" />
      <path d="M10.5 12h3M10.5 15h3" />
    </>
  ),
  heart: (
    <path d="M12 20S4 14.5 4 9a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 9c0 5.5-8 11-8 11z" />
  ),
  sparkle: (
    <path d="M12 3l1.9 5.3L19 10l-5.1 1.7L12 17l-1.9-5.3L5 10l5.1-1.7L12 3z" />
  ),
  check: <path d="M4.5 12.5l4.5 4.5 10.5-11" />,
  "arrow-right": <path d="M5 12h14M13 6l6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  phone: (
    <path d="M6 4h3l1.5 4-2 1.5a12 12 0 006 6l1.5-2 4 1.5v3a2 2 0 01-2 2A16 16 0 014 6a2 2 0 012-2z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  "map-pin": (
    <>
      <path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
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
  quote: (
    <path d="M9 7c-2.5 1-4 3.2-4 6v4h5v-5H6.8C7 9.9 8 8.6 10 8L9 7zm9 0c-2.5 1-4 3.2-4 6v4h5v-5h-3.2c.2-2.1 1.2-3.4 3.2-4l-1-1z" />
  ),
  star: (
    <path d="M12 3.5l2.5 5.2 5.7.8-4.1 4 1 5.7L12 16.5 6.9 19.2l1-5.7-4.1-4 5.7-.8L12 3.5z" />
  ),
};

export function Icon({ name, ...props }: IconProps) {
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
      {paths[name]}
    </svg>
  );
}
