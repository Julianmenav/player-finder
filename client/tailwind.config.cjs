/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#5383e8",
        gridColor: "#9cff30",
      },
      fontFamily: {
        monse: ["Montserrat", "Helvetica", "Arial", "sans-serif"],
      },
      backgroundImage: {
        grid: "linear-gradient(theme('colors.gridColor') .1em, transparent .1em), linear-gradient(90deg, theme('colors.gridColor') .1em, transparent .1em);",
        "grid-diagonal": "linear-gradient(45deg, theme('colors.gridColor') 25%, transparent 25%, transparent 75%, theme('colors.gridColor') 75%, theme('colors.gridColor')), linear-gradient(-45deg, theme('colors.gridColor') 25%, transparent 25%, transparent 75%, theme('colors.gridColor') 75%, theme('colors.gridColor'))",
      },
      backgroundSize: {
        grid: "3em 3em",
        "grid-diagonal": "4em 4em",
      },
    },
  },
  plugins: [],
};
