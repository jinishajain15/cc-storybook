/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#dee8ed",
          100: "#9cdbd9",
          200: "#80cbc4",
          300: "#4db6ac",
          400: "#26a69a",
          500: "#00968f",
          600: "#00847d",
          700: "#00796b",
          800: "#00695c",
          900: "#004d40",
          A100: "#a7ffeb",
          A200: "#64ffda",
          A400: "#1de9b6",
          A700: "#00bfa5",
        },
        secondary: {
          50: "#fce4ec",
          100: "#f8bbd0",
          200: "#f48fb1",
          300: "#f06292",
          400: "#dc4588",
          500: "#e91e63",
          600: "#d8317c",
          700: "#c2185b",
          800: "#ad1457",
          900: "#880e4f",
          A100: "#ff80ab",
          A200: "#ff4081",
          A400: "#f50057",
          A700: "#c51162",
        },
        gray: {
          500: "#58595A",
        },
      },
    },
  },
  plugins: [],
};