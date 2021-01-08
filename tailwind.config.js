const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // purge: [
  //   './templates/**/*.twig',
  //   './assets/javascript/**/*.js',
  // ],
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
      // container: {
      //   center: true,
      // },
     fontFamily: {
       display: ['Cooper Light', 'sans-serif'],
     },
    extend: {
    fontFamily: {
      serif: ['Century Schoolbook', ...defaultTheme.fontFamily.serif]
    }
      },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ],
};