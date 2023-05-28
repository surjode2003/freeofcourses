/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./FREEOFCORSES/google.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        blue: {
          '400': '#001969',
          '800': '#003a6a',
        },
      },
    },
  },
  plugins: [],
}

