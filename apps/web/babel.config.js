const config = require('@core/babel');

module.exports = (api) => {
  api.cache(true);

  return ({
    ...config,

    presets: [
      'next/babel',
    ],

    plugins: [
      'inline-react-svg',
    ],
  });
};
