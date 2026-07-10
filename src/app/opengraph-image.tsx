import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

// Generate at request time. @vercel/og cannot prerender during a local
// Windows `next build` (a font/asset path bug), but it works perfectly at
// runtime on Vercel's Linux servers — which is where crawlers fetch it.
export const dynamic = "force-dynamic";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand mark inlined as a data URI so it renders reliably in the card.
const logo =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg width="96" height="96" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="14" fill="#4A2650"/><circle cx="24" cy="23.5" r="12.6" fill="#E4C695"/><circle cx="24" cy="19.3" r="11.5" fill="#4A2650"/><path d="M24 25.8c-3.2-2.3-5.6-4.8-5.6-7.3 0-1.8 1.4-3.1 3.1-3.1 1 0 1.9.5 2.5 1.2.6-.7 1.5-1.2 2.5-1.2 1.7 0 3.1 1.3 3.1 3.1 0 2.5-2.4 5-5.6 7.3z" fill="#E4C695"/><path d="M34.3 11l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" fill="#E4C695"/></svg>`,
  );

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FBF6F4",
          padding: 72,
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* decorative blooms */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 460,
            height: 460,
            borderRadius: 9999,
            backgroundColor: "#EDE3F0",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -180,
            left: -120,
            width: 420,
            height: 420,
            borderRadius: 9999,
            backgroundColor: "#F6E0E4",
          }}
        />

        {/* brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} width={96} height={96} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 42,
                fontWeight: 700,
                fontStyle: "italic",
                color: "#4A2650",
                letterSpacing: 0.5,
              }}
            >
              {site.name}
            </div>
            <div
              style={{
                fontSize: 19,
                fontWeight: 700,
                color: "#A67F4B",
                letterSpacing: 5,
                textTransform: "uppercase",
                marginTop: 6,
              }}
            >
              {site.tagline}
            </div>
          </div>
        </div>

        {/* headline */}
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            color: "#372339",
            lineHeight: 1.08,
            maxWidth: 960,
          }}
        >
          {site.heroTitle}
        </div>

        {/* footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              backgroundColor: "#4A2650",
              color: "#FFFFFF",
              fontSize: 26,
              fontWeight: 700,
              padding: "16px 34px",
              borderRadius: 9999,
            }}
          >
            Book a free consultation
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 26,
              fontWeight: 600,
              color: "#5D4A60",
            }}
          >
            {`Luxury care · ${site.region}`}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
