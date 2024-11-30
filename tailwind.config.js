/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    
    extend: {
      colors:{
        'yellow31': '#F1B609'
      },
    },
  },
  plugins: [],
}