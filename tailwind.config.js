/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E2136E",
        secondary: "#FAD6F8",
        accent:"#FFF0F7"
      }
    },
  },
  plugins: [],
}

