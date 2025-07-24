/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'font1': ['font1', 'sans-serif'],
        'font2': ['font2', 'sans-serif'],
        'font3': ['font3', 'sans-serif'],
        'font4': ['font4', 'sans-serif'],
        'font5': ['font5', 'sans-serif'],
      },
    },
  },
  plugins: [],
}