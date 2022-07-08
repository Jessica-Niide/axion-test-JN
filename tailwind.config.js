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
      }
    }
  },
  plugins: []
}

// box-shadow: 0 2px 7px 3px rgba(0, 0, 0, 0.1);

// #4A4A4A
// #AE23A9
// #DC4E1B
// #9B9B9B
// #FFFFFF
// #F9F9F9
