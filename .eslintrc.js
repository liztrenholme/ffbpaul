module.exports = {
    "extends": [
      "eslint:recommended",
      "plugin:vue/essential"
    ],
    "rules": {
      "vue/html-self-closing": "on",
      "semi": ["error", "never"],
      "quotes": ["error", "single"],
      "no-console": ["error", { "allow": ["warn"] }],
      "indent": ["error", 2]
    }
  }