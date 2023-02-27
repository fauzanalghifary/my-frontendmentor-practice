/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        n1LightLavender: "#CAC9FF",
        n1LightSlateBlue: "hsl(252, 100%, 67%)",
        n1LightRoyalBlue: "hsl(241, 81%, 54%)",
        n1VioletBlue: "hsla(256, 72%, 46%, 1)",
        n1PersianBlue: "hsla(241, 72%, 46%, 0)",
        n1DarkNavy: "#303B59",
        n1VeryLightBlue: "#ECF2FF",
        n1LightRed: "hsl(0, 100%, 67%, 5%)",
        n1LightRed100: "hsl(0, 100%, 67%, 100%)",
        n1OrangeyYellow: "hsl(39, 100%, 56%, 5%)",
        n1OrangeyYellow100: "hsl(39, 100%, 56%, 100%)",
        n1GreenTeal: "hsl(166, 100%, 37% , 5%)",
        n1GreenTeal100: "hsl(166, 100%, 37% , 100%)",
        n1CobaltBlue: "hsl(234, 85%, 45%, 5%)",
        n1CobaltBlue100: "hsl(234, 85%, 45%, 100%)",
        n2DarkCyan: "hsl(158, 36%, 37%)",
        n2Cream: "hsl(30, 38%, 92%)",
        n2VeryDarkBlue: "hsl(212, 21%, 14%)",
        n2DarkGrayishBlue: "hsl(228, 12%, 48%)",
      },
    },
  },
  plugins: [],
};
