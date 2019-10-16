module.exports = {
  root:true,
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "strict": 0,
    "no-console": process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "quotes": [
      "warn",
      "backtick"
    ],
    "prettier/prettier": "warn",
    "react/prop-types": "off",
    "no-unused-vars": "warn",
    "no-extra-semi": "warn"
  },
  "extends": [
    "eslint:recommended",
    "prettier/standard",
    // "plugin:import/errors",
    // "plugin:import/warnings",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
