module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2019,
  },
  extends: ['airbnb-base', 'plugin:eslint-comments/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['svelte3', '@typescript-eslint'],
  ignorePatterns: ['*.cjs'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.json', '.ts', '.d.ts'],
      },
    },
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
};
