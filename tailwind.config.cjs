/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#FF4D00',
        secondary: '#1F1F1F',
      },
      textColor: {
        primary: '#FF4D00',
        secondary: '#1F1F1F',
      },
      borderColor: {
        primary: '#FF4D00',
        secondary: '#1F1F1F',
      }
    },
  },
  safelist: [
    'bg-primary',
    'bg-secondary',
    'text-primary',
    'text-secondary',
    'border-primary',
    'border-secondary',
  ],
  plugins: [],
}
