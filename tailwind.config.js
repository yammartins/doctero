const {
  green,
  blue,
  white,
  gray,
  black,
  red,
} = require('./src/styles/shared/colors');

const {
 family,
 sizes,
} = require('./src/styles/shared/typography');

module.exports = {
  theme: {
    colors: {
      green,
      blue,
      white,
      black,
      red,
      gray,
    },

    fontSize: sizes,

    fontFamily: family,

    borderRadius: {
      'none': '0',
      '2xs': '0.125rem',
      'xs': '0.25rem',
      'sm': '0.375rem',
      'base': '0.5rem',
      'md': '0.625rem',
      'lg': '0.75rem',
      'xlg': '0.875rem',
      '2xl': '1rem',
      '3xl': '2rem',
      'full': '9999px',
    },

    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  content: [
    "./src/components/*.tsx",
    "./src/components/**/*.tsx",
    "./src/pages/*.tsx",
    "./src/pages/**/*.tsx",
    "./src/styles/*.scss",
    "./src/styles/**/.scss",
  ],
}
