/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(to bottom right, #0A1F3F 0%, #0E2A52 15%, #123063 30%, #163A6B 45%, #1A4B75 60%, #184068 75%, #112C4A 90%, #0D1D38 100%)",

        "glass-gradient":
          "linear-gradient(135deg, rgba(86,188,201,0.3) 0%, rgba(120,201,212,0.3) 20%, rgba(170,221,228,0.3) 39%, rgba(255,255,255,0.3) 78%, rgba(86,188,201,0.3) 98%)",
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
        "bg-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "bg-circle": {
          "0%": { backgroundPosition: "0% 50%" }, // left center
          "25%": { backgroundPosition: "100% 50%" }, // right center
          "50%": { backgroundPosition: "100% 100%" }, // bottom right
          "75%": { backgroundPosition: "0% 100%" }, // bottom left
          "100%": { backgroundPosition: "0% 50%" }, // back to start
        },
        "glass-circle": {
          "0%": { backgroundPosition: "0% 50%" },
          "25%": { backgroundPosition: "100% 50%" },
          "50%": { backgroundPosition: "100% 100%" },
          "75%": { backgroundPosition: "0% 100%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "bg-diagonal": {
          "0%": { backgroundPosition: "0% 0%" }, // top-left
          "50%": { backgroundPosition: "100% 100%" }, // bottom-right
          "100%": { backgroundPosition: "0% 0%" }, // back to start
        },
        "glass-diagonal": {
          "0%": { backgroundPosition: "0% 0%" }, // top-left
          "50%": { backgroundPosition: "100% 100%" }, // bottom-right
          "100%": { backgroundPosition: "0% 0%" }, // back to start
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
        "gradient-x": "bg-shift 8s ease infinite",
        "gradient-circle": "bg-circle 10s linear infinite", // slow clockwise motion
        "glass-circle": "glass-circle 20s ease-in-out infinite", // slower shimmer
        "gradient-diagonal": "bg-diagonal 12s ease-in-out infinite",
        "glass-diagonal": "glass-diagonal 18s ease-in-out infinite", // slow shimmer
      },

      fontFamily: {
        righteous: ["Righteous", "cursive"],
        robotoSlab: ["Roboto Slab", "serif"],
        robotoFlex: ["Roboto Flex", "sans-serif"],
      },
    },
  },
  plugins: [],
};
