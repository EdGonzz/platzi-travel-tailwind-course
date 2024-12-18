/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/css/tailwind.css"],
  theme: {
    extend: {
      colors: {
        primary: '#CC2D4A',
        secondary: '#8FA206',
        tertiary: '#2d5e71',
        custom: {
          default: '#f1f1f1',
          primary: '#CC2D4A'
        }
      },
      fontFamily: { 
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      objectPosition: {
        'Chicago': '0px -400px',
        'Miami': '0px -10px',
      },
  },
  },

  variants: {
    extend: {},
  },

  corePlugins: {
    aspectRatio: false,
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar'),
  ],
}

