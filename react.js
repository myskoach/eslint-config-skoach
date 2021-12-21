module.exports = {
  extends: [
    "plugin:react/recommended"
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018,
    ecmaFeatures: {
      "jsx": true
    },
    requireConfigFile: false
  },
  plugins: ["react-hooks"],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    // react hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // jsx
    "react/no-unused-prop-types": ["warn"],
    "react/jsx-boolean-value": ["error", "never"],
    "react/jsx-child-element-spacing": "warn",
    "react/jsx-closing-bracket-location": "error",
    "react/jsx-closing-tag-location": "error",
    "react/jsx-curly-spacing": ["error", {
      "when": "never",
      "children": true
    }],
    "react/jsx-equals-spacing": "error",
    "react/jsx-filename-extension": "error",
    "react/jsx-first-prop-new-line": "error",
    "react/jsx-handler-names": "error",
    "react/jsx-indent": ["error", 2, {
      "checkAttributes": true,
      "indentLogicalExpressions": true
    }],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-key": "error",
    "react/jsx-max-depth": "off",
    "react/jsx-max-props-per-line": "off",
    "react/jsx-no-bind": "error",
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-literals": "off",
    "react/jsx-no-target-blank": "error",
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-one-expression-per-line": ["error", {
      "allow": "single-child"
    }],
    "react/jsx-curly-brace-presence": "error",
    "react/jsx-fragments": ["error", "syntax"],
    "react/jsx-pascal-case": "error",
    "react/jsx-props-no-multi-spaces": "error",
    "react/jsx-sort-default-props": "error",
    "react/jsx-sort-props": ["error", {
      "callbacksLast": true,
      "ignoreCase": true,
      "shorthandFirst": true
    }],
    "react/jsx-tag-spacing": [
      "error", {
        "closingSlash": "never",
        "beforeSelfClosing": "always",
        "afterOpening": "never",
        "beforeClosing": "never"
      }
    ],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-wrap-multilines": [
      "error", {
        "declaration": "parens-new-line",
        "assignment": "parens-new-line",
        "return": "parens-new-line",
        "arrow": "parens-new-line",
        "condition": "parens-new-line",
        "prop": "ignore"
      }
    ]
  }
}
