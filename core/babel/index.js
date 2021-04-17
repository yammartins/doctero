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
