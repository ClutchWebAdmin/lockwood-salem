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
        primaryLight: "var(--primaryLight)",
        primaryDark: "var(--primaryDark)",
        primaryGreen: "var(--primaryGreen)",
        secondaryGreen: "var(--secondaryGreen)",
        primaryBrown: "var(--primaryBrown)",
        accentBrown: "var(--accentBrown)",
        primaryMuted: "var(--primaryMuted)",
        secondaryMuted: "var(--secondaryMuted)",
      },
      fontFamily: {
        sans: ["var(--font-satoshi)"],
        serif: ["var(--font-erode)"],
      },
    },
  },
  plugins: [],
};
