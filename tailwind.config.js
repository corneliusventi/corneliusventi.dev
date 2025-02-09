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
          light: "#F5E6CA",
          dark: "#343F56",
        },
      },
      fontFamily: {
        sans: ["var(--font-rubik)"],
        mono: ["var(--font-rubik-mono-one)"],
      },
    },
  },
  plugins: [],
};
