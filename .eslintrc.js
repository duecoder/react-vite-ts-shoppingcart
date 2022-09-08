module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  parser: '@babel/eslint-parser',
  plugins: ['react', 'prettier']
};
