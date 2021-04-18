const config = require('@core/babel');

module.exports = (api) => {
  api.cache(true);

  return ({
    presets: [
      'next/babel',
    ],

    plugins: [
      'inline-react-svg',
      ...config().plugins,
    ],
  });
};
