/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a174e",
        secondary: "#fee715"
      },
      animation: {
        "spin-slow": "spin 0.5s linear infinite", // faster shuriken spin
      },
    },
  },
  plugins: [],
}