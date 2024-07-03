let globals = require("globals");
let pluginJs = require("@eslint/js");
let tseslint = require("typescript-eslint");
let pluginReactConfig = require("eslint-plugin-react/configs/recommended.js");

module.exports = [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    env: {
      browser: true,
      node: true,
    },
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
];
