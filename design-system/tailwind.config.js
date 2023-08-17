/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#dee8ed",
          a500: "rgb(222 232 237 / 80%)",
          b500: "rgb(222 232 237 / 60%)",
          c500: "rgb(222 232 237 / 40%)",
          d500: "rgb(222 232 237 / 20%)",
          e500: "rgb(222 232 237 / 10%)",
        },
        gray: {
          500: "#58585A",
          a500: "rgb(88 88 90 / 80%)",
          b500: "rgb(88 88 90 / 60%)",
          c500: "rgb(88 88 90 / 40%)",
          d500: "rgb(88 88 90 / 20%)",
          e500: "rgb(88 88 90 / 10%)",
        },
        green: {
          500: "#C0D731",
          a500: "rgb(192 215 49 / 80%)",
          b500: "rgb(192 215 49 / 60%)",
          c500: "rgb(192 215 49 / 40%)",
          d500: "rgb(192 215 49 / 20%)",
          e500: "rgb(192 215 49 / 10%)",
        },
        pink: {
          50: "#fce4ec",
          100: "#f8bbd0",
          200: "#f48fb1",
          300: "#f06292",
          400: "#dc4588",
          500: "#e91e63",
          600: "#d8317c",
          a600: "rgb(216 49 124 / 80%)",
          b600: "rgb(216 49 124 / 60%)",
          c600: "rgb(216 49 124 / 40%)",
          d600: "rgb(216 49 124 / 20%)",
          e600: "rgb(216 49 124 / 10%)",
          700: "#c2185b",
          800: "#ad1457",
          900: "#880e4f",
          A100: "#ff80ab",
          A200: "#ff4081",
          A400: "#f50057",
          A700: "#c51162",
        },
        teal: {
          50: "#dee8ed",
          a50: "rgb(222 232 237 / 80%)",
          b50: "rgb(222 232 237 / 60%)",
          c50: "rgb(222 232 237 / 40%)",
          d50: "rgb(222 232 237 / 20%)",
          e50: "rgb(222 232 237 / 10%)",
          100: "#9cdbd9",
          a100: "rgb(156 219 217 / 80%)",
          b100: "rgb(156 219 217 / 60%)",
          c100: "rgb(156 219 217 / 40%)",
          d100: "rgb(156 219 217 / 20%)",
          e100: "rgb(156 219 217 / 10%)",
          200: "#80cbc4",
          300: "#4db6ac",
          400: "#26a69a",
          500: "#00968f",
          600: "#00847d",
          a600: "rgb(0 132 125 / 80%)",
          b600: "rgb(0 132 125 / 60%)",
          c600: "rgb(0 132 125 / 40%)",
          d600: "rgb(0 132 125 / 20%)",
          e600: "rgb(0 132 125 / 10%)",
          700: "#00796b",
          800: "#00695c",
          900: "#004d40",
          A100: "#a7ffeb",
          A200: "#64ffda",
          A400: "#1de9b6",
          A700: "#00bfa5",
        },
      },
    },
  },
  plugins: [],
};