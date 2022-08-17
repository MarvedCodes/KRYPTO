/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'body':'#010136',
        'brand': '#9090DB',
        'secondary': '#89D0D1',
      },
      fontFamily: {
        'roboto':'Roboto',
        'outfit':'Outfit',
      }
    },
  },
  plugins: [],
}
