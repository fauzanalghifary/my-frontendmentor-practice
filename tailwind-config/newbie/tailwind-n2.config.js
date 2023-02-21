/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        n2DarkCyan: "hsl(158, 36%, 37%)",
        n2Cream: "hsl(30, 38%, 92%)",
        n2VeryDarkBlue: "hsl(212, 21%, 14%)",
        n2DarkGrayishBlue: "hsl(228, 12%, 48%)",
      },
    },
  },
  plugins: [],
};
