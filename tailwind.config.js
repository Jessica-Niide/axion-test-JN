/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Open Sans, sans-serif'
      },
      colors: {
        gray: {
          100: '#F9F9F9',
          300: '#9B9B9B',
          900: '#4A4A4A'
        },
        red: {
          500: '#DC4E1B'
        },
        pink: {
          500: '#AE23A9'
        }
      },
      boxShadow: {
        sm: '0 2px 7px 3px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        linear: 'linear-gradient(134.72deg, #AE23A9 0%, #DC4E1B 100%)'
      },
      screens: {
        lg: '1500px'
      }
    }
  },
  plugins: []
}
