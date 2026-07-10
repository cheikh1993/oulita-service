/**
 * Decorative hero illustration — a calm "night watch" scene in the
 * brand palette (plum, rose, champagne gold).
 * Purely presentational; replaced automatically once you set
 * site.images.hero to a real photo.
 */
export function HeroArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 560"
      className={className}
      role="img"
      aria-label="A golden crescent moon and stars watching over a softly nestled home"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F7F2F8" />
          <stop offset="1" stopColor="#FBF1F3" />
        </linearGradient>
        <linearGradient id="moon" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E4C695" />
          <stop offset="1" stopColor="#C79E66" />
        </linearGradient>
        <clipPath id="panel">
          <rect x="0" y="0" width="520" height="560" rx="40" />
        </clipPath>
      </defs>

      <g clipPath="url(#panel)">
        <rect width="520" height="560" fill="url(#sky)" />

        {/* soft blooms */}
        <circle cx="120" cy="120" r="150" fill="#EDE3F0" opacity="0.6" />
        <circle cx="430" cy="360" r="170" fill="#F6E0E4" opacity="0.6" />

        {/* crescent moon */}
        <g>
          <circle cx="360" cy="150" r="66" fill="url(#moon)" />
          <circle cx="386" cy="132" r="60" fill="url(#sky)" />
        </g>

        {/* stars */}
        <g fill="#4A2650">
          <path d="M150 110l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" opacity="0.65" />
          <path d="M250 70l2.4 6.4 6.4 2.4-6.4 2.4L250 94l-2.4-6.4-6.4-2.4 6.4-2.4z" opacity="0.5" />
          <circle cx="200" cy="180" r="3" opacity="0.45" />
          <circle cx="300" cy="230" r="3.5" opacity="0.4" />
          <circle cx="110" cy="250" r="3" opacity="0.35" />
        </g>

        {/* rolling hills */}
        <path
          d="M0 470c90-46 150-46 250-10s180 30 270-8v108H0z"
          fill="#EDE3F0"
        />
        <path
          d="M0 512c110-40 180-28 268 2s170 22 252-14v60H0z"
          fill="#4A2650"
          opacity="0.92"
        />

        {/* little home with a warm window */}
        <g transform="translate(214 372)">
          <rect x="0" y="40" width="92" height="86" rx="12" fill="#FBF6F4" />
          <path d="M-12 46L46 4l58 42z" fill="#B05E6D" />
          <rect x="30" y="72" width="32" height="40" rx="8" fill="#E4C695" />
          <path d="M46 72v40M30 92h32" stroke="#B05E6D" strokeWidth="2" />
        </g>

        {/* nest + heart, foreground */}
        <g transform="translate(96 300)">
          <ellipse cx="60" cy="70" rx="70" ry="26" fill="#C79E66" opacity="0.18" />
          <path
            d="M8 62c14 18 34 26 52 26s38-8 52-26"
            stroke="#C79E66"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M18 54c12 14 28 20 42 20s30-6 42-20"
            stroke="#D9BC8C"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            opacity="0.8"
          />
          <path
            d="M60 66c-13-9-24-19-24-31A13 13 0 0160 24a13 13 0 0124 11c0 12-11 22-24 31z"
            fill="#4A2650"
          />
        </g>
      </g>
    </svg>
  );
}
