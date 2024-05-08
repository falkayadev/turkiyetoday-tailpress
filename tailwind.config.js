/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        "brand-red": "var(--brand-red)",
        "brad-red-opacity": "var(--brand-red-opacity)",
        "logo-red": "var(--logo-red)",
        "passive-text": "var(--passive-text)",
        "passive-text-v2": "var(--passive-text-v2)",
        "financial-bg": "var(--financial-bg)",
        text: "var(--text)",
        "radar-bg": "var(--radar-bg)",
        "radar-border": "var(--radar-border)",
        green: "var(--green)",
      },
      fontFamily: {
        body: "Spectral",
        heading: "Playfair Display",
        nav: "Cormorant SC",
      },
    },
  },
  plugins: [],
};
