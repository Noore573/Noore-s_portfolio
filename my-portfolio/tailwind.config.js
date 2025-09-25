/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(to bottom, #123063 0%, rgba(13, 29, 56, 0.8) 81%, #0D1D38 100%)",
        "glass-gradient":
          "linear-gradient(180deg, rgba(86,188,201,0.3) 0%, rgba(120,201,212,0.3) 20%, rgba(170,221,228,0.3) 39%, rgba(255,255,255,0.3) 78%, rgba(86,188,201,0.3) 98%)",
      },
      keyframes: {
        slideOutLeft: {
          "0%": { transform: "translateX(0)", opacity: 1 },
          "100%": { transform: "translateX(-100%)", opacity: 0 },
        },
        slideOutRight: {
          "0%": { transform: "translateX(0)", opacity: 1 },
          "100%": { transform: "translateX(100%)", opacity: 0 },
        },
        slideOutUp: {
          "0%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(-100%)", opacity: 0 },
        },
        slideOutDown: {
          "0%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(100%)", opacity: 0 },
        },

        slideInLeft: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideInRight: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideInUp: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideInDown: {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        slideOutLeft: "slideOutLeft .5s ease-out forwards",
        slideOutRight: "slideOutRight .5s ease-out forwards",
        slideOutUp: "slideOutUp .5s ease-out forwards",
        slideOutDown: "slideOutDown .5s ease-out forwards",
        slideInLeft: "slideInLeft .5s ease-out forwards",
        slideInRight: "slideInRight .5s ease-out forwards",
        slideInUp: "slideInUp .5s ease-out forwards",
        slideInDown: "slideInDown .5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
