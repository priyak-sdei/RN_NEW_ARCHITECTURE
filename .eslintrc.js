module.exports = {
  env: {
    browser: true,
    es2021: true,
    "react-native/react-native": true,
  },
  extends: [
    "expo",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  ignorePatterns: ["/dist/*"],
  rules: {
    "prettier/prettier": "error",
    "linebreak-style": ["error", "unix"],
    "no-console": [
      "error",
      {
        allow: ["error"],
      },
    ],
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    quotes: 0, // Enforces the use of single or double quotes consistently.,
    "react/prop-types": "error",
    //Best Practices
    eqeqeq: 2, //Enforces strict equality checks (=== and !==).
    "no-loop-func": 2, // Disallows function declarations within loops,
    "react-native/rn-no-color-literals": "error",
    "react-native/prefer-stylesheet-usage": "error",
    "react-native/no-inline-styles": "error",
    "react-native/no-raw-text": "error",
    "react-native/no-color-literals": "error",
    "no-unused-vars": "warn", // Add this line to show warning for unused imports
    "unused-imports/no-unused-imports": "warn", // Add this line to show warning for unused imports
  },
};
