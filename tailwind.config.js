const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        "home-desktop": "url('/src/assets/backgrounds/home-desktop.svg')",
        "home-mobile": "url('/src/assets/backgrounds/home-mobile.svg')"
      }
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      pink: colors.fuchsia,
      gray: colors.blueGray,
      blue: colors.sky
    },
    fontFamily: {
      sans: ["Poppins", ...defaultTheme.fontFamily.sans]
    }
  },
  variants: {},
  plugins: []
};