/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0056B3',
        'primary-dark': '#003d82',
        success: '#27AE60',
        warning: '#F39C12',
      },
    },
  },
  plugins: [],
}
