/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3a9ff1",
        foreground: "#FBF9F1",
        background: "#000000",
        hero_text_color: "#8fa6fb",
        newsletter_color_one: "#10123d",
        newsletter_color_two: "#080d2b"
      },
    },
  },
  plugins: [],
}