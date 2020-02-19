module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: "babel-eslint",
  plugins: [
    "react",
    "react-native"
  ],
  parserOptions: {
    ecmaFeatures: {
      "jsx": true,
      "modules": true
    }
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb-base"
  ],
  rules: {
    "arrow-body-style": 'warn',
    "no-async-promise-executor": "off",
    "no-misleading-character-class": "off",
    "no-prototype-builtins": "off",
    "no-shadow-restricted-names": "off",
    "no-useless-catch": "off",
    "no-with": "off",
    "require-atomic-updates": "off",

    "no-console": "error"
  },
};