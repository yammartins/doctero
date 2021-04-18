module.exports = () => ({
  presets: [
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
        targets: {
          node: '12',
        },
      },
    ],
    '@babel/typescript',
    'minify',
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-object-rest-spread',
    [
      'styled-components',
      {
        displayName: false,
        preprocess: false,
        minify: true,
      },
    ],
  ],
});
