const { resolve } = require('path');
const SVG = require('next-react-svg');
const FONTS = require('next-fonts');

/**
 * @type {import('next').NextConfig}
 * */
module.exports = FONTS(
  SVG({
    env: {
      API_URL: process.env.API_URL,
      ADMIN_URL: process.env.ADMIN_URL,
      COOKIE_AUTH: process.env.COOKIE_AUTH,
      COOKIE_EMAIL: process.env.COOKIE_EMAIL,
    },

    include: resolve(__dirname, 'src/assets'),

    compiler: {
      styledComponents: true,
    },

    swcMinify: true,

    trailingSlash: true,
  }),
);
