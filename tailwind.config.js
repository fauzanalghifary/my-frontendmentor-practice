/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: {
        n1lightRed: "hsl(0, 100%, 67%)",
        n1OrangeyYellow: "hsl(39, 100%, 56%)",
        n1GreenTeal: "hsl(166, 100%, 37%)",
        n1CobaltBlue: "hsl(234, 85%, 45%)",
        n1LightSlateBlue: "hsl(252, 100%, 67%)",
        n1LightRoyalBlue: "hsl(241, 81%, 54%)",
        n1VioletBlue: "hsla(256, 72%, 46%, 1)",
        n1PersianBlue: "hsla(241, 72%, 46%, 0)",
        n1White: "hsl(0, 0%, 100%)",
        n1PaleBlue: "hsl(221, 100%, 96%)",
        n1LightLavender: "hsl(241, 100%, 89%)",
        n1DarkGrayBlue: "hsl(224, 30%, 27%)",
      },
    },
  },
  plugins: [],
};
