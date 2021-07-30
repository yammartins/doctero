/**
 * @type {import('next').NextConfig}
 * */
const next = {
  env: {
    VITE_API_URL: process.env.VITE_API_URL,
    VITE_ADMIN_URL: process.env.VITE_ADMIN_URL,
    VITE_COOKIE_AUTH: process.env.VITE_COOKIE_AUTH,
  },

  eslint: {
    dirs: ['pages'],
  },

  distDir: 'dist',

  trailingSlash: true,
};

module.exports = next;
