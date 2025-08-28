/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#2D5016',
        'primary-brown': '#8B4513', 
        'primary-gold': '#DAA520',
        'success-green': '#27AE60',
        'neutral-dark': '#2C3E50',
        'neutral-light': '#F8F9FA',
      }
    },
  },
  plugins: [],
}