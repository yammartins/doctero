/**
 * @type {import('next').NextConfig}
 * */
const next = {
  env: {
    API_URL: process.env.API_URL,
    ADMIN_URL: process.env.ADMIN_URL,
    COOKIE_AUTH: process.env.COOKIE_AUTH,
  },

  eslint: {
    dirs: ['pages'],
  },

  distDir: 'dist',

  trailingSlash: true,
};

module.exports = next;
