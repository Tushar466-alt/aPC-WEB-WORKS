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
  extend: {
    translate: {
      "1/2": "50%", // Adds a class 'translate-x-1/2' that translates horizontally by 50% of the element's width.
      full: "100%", // Adds a class 'translate-x-full' that translates horizontally by 100% of the element's width.
      // Add more custom translations here if needed.
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      dashAnimation: {
        "0%": { "stroke-dashoffset": 565 },
        "100%": { "stroke-dashoffset": 197.55 },
      },
      dashAnimation2: {
        "0%": { "stroke-dashoffset": 565 },
        "100%": { "stroke-dashoffset": 113 },
      },
      dashAnimation3: {
        "0%": { "stroke-dashoffset": 565 },
        "100%": { "stroke-dashoffset": 28.25 },
      },
      dashAnimation4: {
        "0%": { "stroke-dashoffset": 565 },
        "100%": { "stroke-dashoffset": 163.85 },
      },
      bounceInRight: {
        "0%": {
          transform: "translateX(60%)",
        },
        "100%": {
          transform: "translateX(0)",
        },
      },
      bounceInLeft: {
        "0%": {
          transform: "translateX(-60%)",
        },
        "100%": {
          transform: "translateX(0)",
        },
      },
      opacityAnimaton: {
        0: {
          opacity: "0",
        },
        "50%": {
          opacity: "0",
        },
        100: {
          opacity: "0",
        },
      },
    },

    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
    },
  },
  animation: {
    fadeIn: "fadeIn 1s ease-in",
    dashAnimation: "dashAnimation 1s linear forwards",
    dashAnimation2: "dashAnimation2 1s linear forwards",
    dashAnimation3: "dashAnimation3 1s linear forwards",
    dashAnimation4: "dashAnimation4 1s linear forwards",
    bounceInLeft: "bounceInLeft 2s ease 0s",
    bounceInRight: "bounceInRight 2s ease 0s",
    opacityAnimaton: "opacityAnimaton 2s ease 0s",
  },
  plugins: [require('tailwindcss-animations'),],
};
