module.exports = {
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 9,
  },
  "env": {
    "jest": true,
    "node": true,
    "es6": true
  },
  "rules": {
    "for-direction": "off",
    "semi": ["error", "always"],
    "no-console": "off",
    "quotes": ["error", "single"],
    "prefer-const": ["error"],
  }
};