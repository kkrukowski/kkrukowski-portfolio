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
      dark: "#14213D",
      light: "#FCFCFC",
    },
    fontFamily: {
      sans: ['Roboto Slab', 'sans-serif'],
    },
  },
  plugins: [],
};
