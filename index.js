module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:lodash-fp/recommended",
    "plugin:regexp/recommended"
  ],
  env: {
    browser: true,
    jquery: true,
    es6: true
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 8,
    ecmaFeatures: {
      "jsx": true
    },
    requireConfigFile: false
  },
  plugins: ["react-hooks", "lodash-fp", "jest", "regexp"],
  settings: {
    "import/extensions": [".js", ".jsx"],
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".json"]
      }
    },
    react: {
      version: "detect"
    }
  },
  rules: {
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": "error",
    "comma-dangle": "error",
    "comma-spacing": ["error", {
      "before": false,
      "after": true
    }],
    "comma-style": ["error", "last"],
    "eqeqeq": "error",
    "func-style": ["error", "declaration", {
      "allowArrowFunctions": true
    }],
    "func-call-spacing": "error",
    "function-call-argument-newline": ["error", "consistent"],
    "function-paren-newline": ["error", "consistent"],
    "generator-star-spacing": ["error", {
      "before": false,
      "after": true
    }],
    "indent": ["error", 2, {
      "SwitchCase": 1
    }],
    "key-spacing": "error",
    "keyword-spacing": "error",
    "max-len": ["error", {
      "code": 100,
      "ignoreRegExpLiterals": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true,
      "ignoreUrls": true
    }],
    "no-bitwise": "warn",
    "no-console": "warn",
    "no-multiple-empty-lines": ["error", {
      "max": 1
    }],
    "no-undef-init": "error",
    "no-use-before-define": ["error", "nofunc"],
    "no-var": "error",
    "nonblock-statement-body-position": "error",
    "object-curly-spacing": ["error", "never"],
    "object-property-newline": ["error", {
      "allowAllPropertiesOnSameLine": true
    }],
    "padded-blocks": ["error", "never"],
    "quotes": ["error", "double"],
    "space-before-blocks": "error",
    "space-before-function-paren": [
      "error", {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "semi": ["error", "never"],
    "space-in-parens": "error",
    "yoda": "error",

    // import rules
    "import/extensions": ["error", "never"],

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
  },
  overrides: [{
    files: ["*.test.js", "*.test.jsx"],
    env: {
      "jest/globals": true
    },
    extends: ["plugin:jest/recommended", "plugin:jest/style"]
  }, {
    files: ["webpack.config.js"],
    env: {
      node: true
    }
  }]
}
