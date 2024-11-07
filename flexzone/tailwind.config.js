const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Comfortaa: ["comfortaa"],
      },
      aspectRatio: { '1920/604': 'calc(604 / 1920)', },
    },
  },
  plugins: [],
});