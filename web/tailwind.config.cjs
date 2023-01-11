/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'signInBg': "url('/src/assets/bg-layer.png')",
        'homeLayer': "url('/src/assets/home-layer.png')"
      },
      colors: {
        red: {
          500: '#FF563F'
        },
        pink:{
          500: '#FF62B7'
        },
        orange: {
          100: '#FFD5AE',
          150: '#FFB661',
          200: '#FCB03E',
          300: '#FF922D',
          500: '#FC6A3C',
        },
        yellow: {
          400: '#FFD234',
          500: '#FFC93F'
        },
        gray: {
          100: '#EFEFEF',
          700: '#464646'
        }
      }
    },
  },
  plugins: [],
}
