module.exports = {
  future: {
    webpack5: true,
  },

  distDir: 'dist',

  webpack: (config, { isServer }) => {
    if (! isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },

  trailingSlash: true,
};
