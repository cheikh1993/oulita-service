import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        cream: "#FBF8F4",
        surface: "#FFFFFF",
        ink: {
          DEFAULT: "#33302B",
          soft: "#5B564E",
          muted: "#8A847A",
        },
        sage: {
          DEFAULT: "#617A66",
          deep: "#4C6353",
          soft: "#E7EEE8",
          tint: "#F1F5F1",
        },
        blush: {
          DEFAULT: "#C98B7A",
          soft: "#F6E7E2",
          tint: "#FBF1ED",
        },
        line: "#ECE5DB",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(51, 48, 43, 0.04), 0 12px 32px -12px rgba(51, 48, 43, 0.12)",
        lift: "0 2px 4px rgba(51, 48, 43, 0.05), 0 24px 48px -20px rgba(51, 48, 43, 0.22)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
