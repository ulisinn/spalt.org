module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'node': true,
    'mocha': true,
  },
  'extends': ['eslint:recommended', 'plugin:react/recommended'],
  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'module',
    'allowImportExportEverywhere': true,
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'comma-dangle': ['error', 'always-multiline'],
    // "indent": ["error", 0],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-unused-vars':0, // ['warn'],
    'no-console': 0,
    'react/jsx-uses-react': 0,
  },
};
