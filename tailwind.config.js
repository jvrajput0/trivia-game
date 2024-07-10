/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dotFont: ["Codystar", "sans-serif"], 
        mainFont: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}

