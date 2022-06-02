module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'eslint-comments'],
  extends: [
    'plugin:react/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    "react/jsx-props-no-spreading": [<enabled />, {
      "html": "ignore" | "enforce",
      "custom": "ignore" | "enforce",
      "explicitSpread": "ignore" | "enforce",
      "exceptions": [<string />]
    }],
    "no-console": "warn",
    "prettier/prettier": ["error", {
      "endOfLine":"auto"
    }],
    "react/display-name": "off",
    "react/no-children-prop": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-unused-vars": "off",

    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
  },
};
