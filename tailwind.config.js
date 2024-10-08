/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#FCA311",
      "primary-dark": "#d78703",
      "primary-light": "#fdc05d",
      dark: "#14213D",
      light: "#FCFCFC",
      red: "#c25451",
    },
    fontFamily: {
      sans: ['Roboto Slab', 'sans-serif'],
    },
    extend: {
      screens: {
        'sm-h': { 'raw': '(min-height: 320px)' },
        'md-h': { 'raw': '(min-height: 480px)' },
        'lg-h': { 'raw': '(min-height: 768px)' },
        'xl-h': { 'raw': '(min-height: 850px)' },
        'mobile': { 'raw': '(max-width: 1190px)' },
        'desktop': { 'raw': '(min-width: 950px)' },
      }
    }
  },
  plugins: [],
};
