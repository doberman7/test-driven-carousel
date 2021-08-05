//src/.eslintrc.js
module.exports = {
  plugins: ["react"],
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
  },
  rules: {
    // quotes: ["error", "single", { avoidEscape: true }],
    // "comma-dangle": ["error", "always-multiline"],
  },
  settings: {
    react: {
      version: "16.4.2",
    },
  },
};
