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
  mode: 'jit',

  purge: [
    'pages/*.vue',
    'layouts/*.vue',
    'nuxt.config.js',
    'components/*.vue'
  ],
  darkMode: false,
  theme: {
    colors: {
      blue: {
        100: '#EBF5FF',
        200: '#5AACFF',
        DEFAULT: '#0C66FF',
        400: '#0D55CF'
      },

      gray: {
        300: '#B0B7C3',
        400: '#8A94A6',
        500: '#4E5D78',
        600: '#0A1F44'
      },

      info: {
        DEFAULT: '#0284FE'
      },

      danger: {
        DEFAULT: '#F03D3D'
      },

      success: {
        DEFAULT: '#0BB07B'
      },

      warning: {
        DEFAULT: '#FFAD0D'
      }
    },

    screens: {
      xs: '576px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1280px',
      xxl: '1536px'
    },

    fontFamily: {
      DEFAULT: "'Inter', sans-serif"
    }
  },

  plugins: [
    plugin(({ addComponents }) => addComponents(grid))
  ]
}
