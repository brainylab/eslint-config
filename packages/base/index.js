module.exports = {
  env: {
    es2020: true,
    node: true,
    jest: true,
  },
  reportUnusedDisableDirectives: true,
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "eslint-plugin-import-helpers", "prettier"],
  rules: {
    camelcase: "off",
    "prettier/prettier": "error",
    "import/no-unresolved": "error",
    "class-methods-use-this": "off",
    "import/prefer-default-export": "off",
    "no-shadow": "off",
    "no-console": "off",
    "no-useless-constructor": "off",
    "no-empty-function": "off",
    "lines-between-class-members": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        ts: "never",
      },
    ],
    "import-helpers/order-imports": [
      "warn",
      {
        // example configuration
        newlinesBetween: "always",
        groups: [
          "module",
          ["/^@shared/", "/^@core/", "/^@modules/"],
          ["/^@utils/", "/^@service/", "/^@config/"],
          ["/^@interfaces/"],
          ["parent", "sibling", "index"],
        ],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/*.spec.js"] },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: true,
        },
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
