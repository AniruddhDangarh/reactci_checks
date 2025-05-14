// eslint.config.cjs
const js = require("@eslint/js");
const globals = require("globals");
const reactPlugin = require("eslint-plugin-react");

module.exports = [
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021
      }
    },
    plugins: {
      react: reactPlugin
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules
    }
  }
];

