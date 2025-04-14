/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5CB338',
        secondary: '#ECE852',
        accent: '#FFC145',
        danger: '#FB4141',
      },
    },
  },
  plugins: [],
}