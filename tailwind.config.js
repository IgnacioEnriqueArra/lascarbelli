/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          mint: "#00D4AA",
          pink: "#FF6B9D",
          violet: "#A855F7",
          verde: "#10B981",    
          "verde-dark": "#059669",
        },
        agua: "#06B6D4",
        "agua-dark": "#0891B2",
        lila: "#D946EF",     
        "lila-dark": "#C026D3",
        oscuro: "#09090B",
        claro: "#FCFCFC",
      },
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.03)",
        card: "0 10px 40px -10px rgba(0,0,0,0.06)",
        "card-hover": "0 20px 40px -10px rgba(0, 0, 0, 0.12)",
        glow: "0 0 20px rgba(217, 70, 239, 0.25)",
        "glow-lg": "0 0 40px rgba(217, 70, 239, 0.4)",
        "glow-pink": "0 0 40px rgba(255, 107, 157, 0.25)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "blob": "blob 7s infinite",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        }
      }
    },
  },
  plugins: [],
};