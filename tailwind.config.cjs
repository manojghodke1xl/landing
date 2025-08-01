/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        playfair: ['"Playfair Display"', 'serif'],
        helvetica: ['"Helvetica World"', 'sans-serif'],
        opensauce: ['"Open Sauce Semibold"', 'sans-serif'],
        nunito: ['"Nunito"', 'sans-serif'],
      },
      padding: {
        custom: ["25px", "25px", "10px", "50px", "80px"],
        "custom-feedback": ["45px", "20px", "30px", "220px"],
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        md: "18px",
        lg: "20px",
        xl: "24px",
      },
      colors: {
        secondary: "#202020",
        gray: "#3C3C3C",
        "custom-pay": "#F5F7F9",
        "dark-gray": "#303030",
        primary: "#000000",
        "primary-light": "#f4f1f1ff",
        "custom-primary": "#582b81",
        "btn-primary": "#0067DE",
        "custom-amber": "#FFC621",
        "custom-gray-light": "#262626",
        "feedback-div": "#3B3B3B",
        "custom-gray": "#272727",
        "custom-light":"#f8f8f8dd",
      },
      keyframes: {
        moveLeftRight: {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(-10px)",
          },
        },
        moveTopBottom: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        textLeftRight: {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(-10px)",
          },
        },
      },
      animation: {
        moveLeftRight: "moveLeftRight 3s infinite",
        textLeftRight: "textLeftRight 5s infinite",
        moveTopBottom: "moveTopBottom 5s infinite",
      },
      screens: {
        xl: "1100px", // Custom breakpoint at 1100px
      },
    },
  },
  plugins: [],
});
