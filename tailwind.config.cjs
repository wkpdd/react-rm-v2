/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      colors:{
        pbg: {
          DEFAULT: "#E9EAEC"
        }
      },
      width:{
        a4:"595px"
      },
      height:{
        a4:"842px"
      },
      backgroundImage: {
        'hot': "url('/src/projects/weather-app/assets/hot.jpg')",
        'cold': "url('/src/projects/weather-app/assets/cold.jpg')",
      }
      
    },
  },
  plugins: [],
}
