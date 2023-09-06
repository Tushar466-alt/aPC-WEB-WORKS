/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "480px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "481px", max: "768px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "769px", max: "1024px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1025px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
    },
    // colors: {
    //   yellow: "transparent",
    //   green: "currentColor",
    //   red: "#ffffff",
    //   lightYellow: "#3f3cbb",
    //   lightGreen: "#ebffeb",
    //   lightRed: "#565584",
    //   textBlack: "#1c1c1c"
    // },
  },
  plugins: [],
};
