/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#5C6B73',
        secondary: '#C2DFE3',
        ternary: '#9DB4C0',
        dark: '#253237',
        light: '#E0FBFC',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
