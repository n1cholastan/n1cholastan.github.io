/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "black": "#2D2A32",
        "highlight": "#BB0000",
        "background": "#CCC2C2"
      },
      fontFamily: {
        inter: ["Inter"]
      }
    },
  },
  plugins: [],
}

