/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main:"#0859ff",
        second:"#e7d206",
        bgc:"#1a1919"
      }
      
    },
  },
  plugins: [],
}