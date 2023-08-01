/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e0f2f1",
          100: "#b2dfdb",
          200: "#80cbc4",
          300: "#4db6ac",
          400: "#26a69a",
          500: "#00968f",
          600: "#00847d",
          700: "#00796b",
          800: "#00695c",
          900: "#004d40",
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
        },
      },
    },
  },
  plugins: [],
};