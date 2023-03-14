/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/*.html',
    './public/*.js',
    './public/js/tw-elements/dist/js/*.js',
  ],
  theme: {
    extend: {
      colors:{
        primary:'#ff6263',
        secondary:{
          100:'#E2E2D5',
          200:'#888883',
        }
      },
      fontFamily:{
        body:['Nunito']
      }
    },
  },
  plugins: [],
}
