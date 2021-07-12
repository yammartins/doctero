module.exports = {
  env: {
    API_URL: process.env.API_URL,
    ADMIN_URL: process.env.ADMIN_URL,
  },

  eslint: {
    dirs: ['pages'],
  },

  distDir: 'dist',

  trailingSlash: true,
};
