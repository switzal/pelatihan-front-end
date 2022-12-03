/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', "sans-serif"],
        poppins: ['"Poppins"',"sans-serif"],
      },
      colors: {
        green: "#32D320",
        grey: "#ABABAB",
        gray: "#C4C4C4",
        gray2: "#EEF2F5",
        putih: "#FFFFFF",
        blue: "#f0f9ff",
      }
    },
  },
  plugins: [],
}
