/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "4xl": { min: "1481px" },
        xxxl: { max: "1480px" },
        xxl: { max: "1280px" },
        xl: { max: "1200px" },
        lg: { max: "1080px" },
        md: { max: "980px" },
        xmd: { max: "920px" },
        xxmd: { max: "780px" },
        sm: { max: "640px" },
        xsm: { max: "540px" },
        xxsm: { max: "480px" },
      },
      colors: {
        'brand': '#0091ff',
      }
    }
  },
  plugins: [],
}