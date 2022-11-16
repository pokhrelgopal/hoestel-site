/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './js/*.js'],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        blueGray: '#D9E4EC',
        mistyBlue: '#B7CFDC',
        lightBlue: '#6AABD2',
        darkBlue: '#385E72',
        bluest: '#4A6CF7',
        grayish: '#1D232D',
        golden: '#ffdf01',
      },
    },
  },
  plugins: [],
}
