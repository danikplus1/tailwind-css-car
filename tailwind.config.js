/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        "roboto-flex": ["Roboto Flex", "sans-serif"],
        "roboto-condensed": ["Roboto Condensed", "sans-serif"],
      },
      colors: {
        primary: "#f7f7f7",
        secondary: "#282828",
        active: "#0147FF",
      },
    },
  },
  plugins: [],
};
