const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: false,
  },
  theme: {
    extend: {
      screens: {
        md: "900px",
      },
      fontFamily: {
        fjalla: ["var(--font-fjalla)", ...fontFamily.sans],
        ssp: ["var(--font-source-sans-pro)", ...fontFamily.sans],
        spartan: ["var(--font-league-spartan)", ...fontFamily.sans],
      },
      colors: {
        primary: "#000000",
        green: "#289f33"
      },
      height: {
        banner: "24rem",
        heroSmall: "45vh",
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
