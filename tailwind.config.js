const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: false,
  },
  theme: {
    extend: {
      fontFamily: {
        fjalla: ["var(--font-fjalla)", ...fontFamily.sans],
        ssp: ["var(--font-source-sans-pro)", ...fontFamily.sans],
      },
      colors: {
        primary: "#000000",
      },
      height: {
        banner: "24rem",
      },
      fontSize: {
        // medium paragraph (Nav, Descriptions, etc.)
        "m-p": [
          "1rem",
          {
            letterSpacing: "2px",
          },
        ],

        // Page Hero Headers
        "page-hero": [
          "4rem",
          {
            letterSpacing: "4px",
          },
        ],

        "card-title": [
          "22px",
          {
            letterSpacing: "2px",
          },
        ],
      },
    },
  },
  plugins: [require("daisyui")],
};
