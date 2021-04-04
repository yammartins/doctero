const plugin = require('tailwindcss/plugin')

const grid = {
  '.container': {
    margin: '0 auto',
    padding: '0 1rem',
    maxWidth: '100%',

    '@screen xs': {
      maxWidth: '540px'
    },
    '@screen sm': {
      maxWidth: '720px'
    },
    '@screen md': {
      maxWidth: '960px'
    },
    '@screen lg': {
      maxWidth: '1140px'
    },
    '@screen xl': {
      maxWidth: '1248px'
    },
    '@screen xxl': {
      maxWidth: '1440px'
    }
  }
}

module.exports = {
  purge: [
    'pages/*.vue',
    'layouts/*.vue',
    'nuxt.config.js',
    'components/*.vue'
  ],
  darkMode: false,
  theme: {
    extend: {},

    screens: {
      xs: '576px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1280px',
      xxl: '1536px'
    }
  },

  variants: {
    rotate: [],
    zIndex: [],
    margin: [],
    padding: [],
    opacity: [],
    spacing: [],
    outline: [],
    fontSize: ['responsive'],
    transform: [],
    translate: [],
    textColor: [],
    boxShadow: [],
    lineHeight: [],
    fontWeight: [],
    textOpacity: [],
    borderWidth: [],
    borderColor: [],
    borderRadius: [],
    borderOpacity: [],
    letterSpacing: [],
    textDecoration: [],
    backgroundColor: [],
    placeholderColor: [],
    backgroundOpacity: [],
    gridTemplateColumns: ['responsive']
  },

  plugins: [
    plugin(({ addComponents }) => addComponents(grid))
  ],

  corePlugins: {
    fill: false,
    skew: false,
    float: false,
    scale: false,
    clear: false,
    stroke: false,
    minWidth: false,
    maxWidth: false,
    minHeight: false,
    container: false,
    maxHeight: false,
    ringColor: false,
    ringWidth: false,
    placeSelf: false,
    alignSelf: false,
    visibility: false,
    placeItems: false,
    strokeWidth: false,
    tableLayout: false,
    ringOpacity: false,
    divideWidth: false,
    justifySelf: false,
    divideColor: false,
    divideStyle: false,
    placeContent: false,
    alignContent: false,
    justifyItems: false,
    listStyleType: false,
    divideOpacity: false,
    accessibility: false,
    objectPosition: false,
    backgroundSize: false,
    borderCollapse: false,
    backgroundClip: false,
    backgroundImage: false,
    ringOffsetColor: false,
    ringOffsetWidth: false,
    transformOrigin: false,
    placeholderColor: false,
    backgroundRepeat: false,
    listStylePosition: false,
    fontVariantNumeric: false,
    overscrollBehavior: false,
    placeholderOpacity: false,
    backgroundPosition: false,
    gradientColorStops: false,
    backgroundAttachment: false
  }
}
