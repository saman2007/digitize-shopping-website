/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.json",
  ],
  theme: {
    extend: {
      fontFamily: {
        "yekan-bl": "yekan-bl",
        "yekan-reg": "yekan-reg",
        "yekan-heavy": "yekan-heavy",
        "yekan-md": "yekan-md",
        "kalameh-black": "kalameh-black",
        "kalameh-bold": "kalameh-bold",
      },
      transitionTimingFunction: {
        "no-delay": "cubic-bezier(0, 0, 0, 0)"
      },
    },
    colors: {
      orange: {
        700: " #DE3618",
        600: "#FC5858",
        500: "#F25E57",
        400: "#FF755C",
        300: "#FF9F8E",
        100: "#FFCBCB",
      },
      slate: {
        1000: "#222F5D",
        900: "#161D25",
        800: "#222F5D",
        700: "#606060",
        200: "#E2E2E2",
      },
      stone: {
        50: "#FDFDFD",
        100: "#F4F4F4",
      },
      gray: {
        200: "#EBEBEB",
        300: "#AFAFAF",
        "300-30op": "rgba(175,175,175,0.29)",
        400: "#E5E5E5",
      },
      indigo: {
        600: "#8750FB",
      },
      yellow: {
        400: "#FFDE74",
      },
      green: {
        200: "#0dff00",
      },
      transparent: "transparent",
      white: "#FFF"
    },
  },
  plugins: [],
};
