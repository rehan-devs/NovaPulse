import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "nova-bg": "#0A0A0F",
        "nova-bg-light": "#0E0E16",
        "nova-card": "#12121A",
        "nova-card-hover": "#16161F",
        "nova-accent": "#4A6CF7",
        "nova-accent-purple": "#7B61FF",
        "nova-accent-secondary": "#5B7BFA",
        "nova-text": "#FFFFFF",
        "nova-text-muted": "#8A8A9B",
        "nova-text-dim": "#5A5A6B",
        "nova-border": "rgba(255, 255, 255, 0.06)",
        "nova-border-hover": "rgba(74, 108, 247, 0.3)",
        "nova-glow": "rgba(74, 108, 247, 0.15)",
      },
      fontFamily: {
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero": ["4.5rem", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "hero-mobile": ["2.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "section": ["2.75rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "section-mobile": ["2rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "card-title": ["1.25rem", { lineHeight: "1.4", letterSpacing: "-0.01em" }],
        "eyebrow": ["0.875rem", { lineHeight: "1.5", letterSpacing: "0.1em" }],
      },
      borderRadius: {
        "card": "16px",
        "card-lg": "20px",
        "button": "10px",
        "pill": "9999px",
      },
      spacing: {
        "section": "120px",
        "section-mobile": "80px",
      },
      maxWidth: {
        "content": "1200px",
        "narrow": "800px",
        "hero-text": "600px",
      },
      animation: {
        "float": "float 4s ease-in-out infinite",
        "float-delayed": "float 4s ease-in-out 1s infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "gradient-shift-slow": "gradientShift 15s ease infinite",
        "marquee": "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        "shimmer": "shimmer 2s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.6s ease forwards",
        "fade-in-down": "fadeInDown 0.6s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "scale-in": "scaleIn 0.5s ease forwards",
        "slide-in-left": "slideInLeft 0.6s ease forwards",
        "slide-in-right": "slideInRight 0.6s ease forwards",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      boxShadow: {
        "glow": "0 0 20px rgba(74, 108, 247, 0.3)",
        "glow-lg": "0 0 40px rgba(74, 108, 247, 0.25)",
        "glow-xl": "0 0 60px rgba(74, 108, 247, 0.2)",
        "glow-purple": "0 0 30px rgba(123, 97, 255, 0.2)",
        "card": "0 4px 24px rgba(0, 0, 0, 0.4)",
        "card-hover": "0 8px 40px rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #4A6CF7 0%, #7B61FF 100%)",
        "gradient-accent-horizontal": "linear-gradient(90deg, #4A6CF7 0%, #7B61FF 100%)",
        "gradient-radial-accent": "radial-gradient(circle, rgba(74, 108, 247, 0.15) 0%, transparent 70%)",
        "gradient-radial-purple": "radial-gradient(circle, rgba(123, 97, 255, 0.12) 0%, transparent 70%)",
        "dot-pattern": "radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;