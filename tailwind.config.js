const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fjalla: ["var(--font-fjalla)", ...fontFamily.sans],
        ssp: ["var(--font-source-sans-pro)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("daisyui")],
};
