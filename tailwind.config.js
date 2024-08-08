/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: false, // or 'media' or 'class'
  content: ["./public/index.html", "./src/css/tailwind.css"],
  theme: {
    extend: {
      colors: {
        primary: '#CC2D4A',
        secondary: '#8FA206',
        tertiary: '#61AEC9',
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      }
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
  ],
}

