const SVG = require('next-react-svg');
const { resolve } = require('path')

/**
 * @type {import('next').NextConfig}
 * */
module.exports = SVG({
  env: {
    VITE_API_URL: process.env.VITE_API_URL,
    VITE_ADMIN_URL: process.env.VITE_ADMIN_URL,
    VITE_COOKIE_AUTH: process.env.VITE_COOKIE_AUTH,
    VITE_COOKIE_EMAIL: process.env.VITE_COOKIE_EMAIL,
  },

  include: resolve(__dirname, 'src/assets'),

  compiler: {
    styledComponents: true,
  },

  swcMinify: true,

  trailingSlash: true,
});
