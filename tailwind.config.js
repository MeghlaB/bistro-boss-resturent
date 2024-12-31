/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBg: 'rgb(31, 41, 55)', 
         fontFamily: "Cinzel",
      },
    },
  },
  plugins: [require('daisyui'),],
}

