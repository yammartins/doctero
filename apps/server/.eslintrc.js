module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    project: [
      'tsconfig.json',
    ],
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-import-helpers',
  ],
  rules: {
    'linebreak-style': 'off',
    'import/no-cycle': 'off',
    'no-param-reassign': 'off',
    'guard-for-in': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'import/no-extraneous-dependencies': 0,
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'no-restricted-syntax': ['error', 'WithStatement', "BinaryExpression[operator='in']"],
    camelcase: 0,
    'space-before-function-paren': ['error', {
      named: 'ignore',
      anonymous: 'always',
      asyncArrow: 'always',
    }],
    'space-unary-ops': [2, {
      words: true,
      nonwords: false,
      overrides: {
        '!': true,
        '!!': true,
      },
    }],
    'import-helpers/order-imports': ['warn', {
      newlinesBetween: 'always',
      groups: [
        '/^react/',
        'module',
        '/^@shared/',
        ['parent', 'sibling', 'index'],
      ],
      alphabetize: { order: 'asc', ignoreCase: true },
    },
    ],
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
