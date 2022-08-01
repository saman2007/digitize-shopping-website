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
    },
  },
  plugins: [],
};
