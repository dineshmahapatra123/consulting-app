/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a", // Deep Blue
        secondary: "#3b82f6", // Bright Blue
        accent: "#f59e0b", // Amber
        background: "#f8fafc", // Slate 50
        surface: "#ffffff",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
