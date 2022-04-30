const { resolve } = require('path');
const SVG = require('next-react-svg');

/**
 * @type {import('next').NextConfig}
 * */
module.exports = SVG({
    env: {
      API_URL: process.env.API_URL,
      ADMIN_URL: process.env.ADMIN_URL,
      COOKIE_AUTH: process.env.COOKIE_AUTH,
      COOKIE_EMAIL: process.env.COOKIE_EMAIL,
    },

    compiler: {
      styledComponents: true,
    },

    include: resolve(__dirname, 'src/assets/svgs'),

    swcMinify: true,

    trailingSlash: true,
  })
