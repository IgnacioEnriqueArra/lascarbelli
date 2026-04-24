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
    },
  },
  plugins: [],
};