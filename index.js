module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:lodash-fp/recommended",
    "plugin:regexp/recommended"
  ],
  "parserOptions": {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  env: {
    browser: true,
    es6: true
  },
  plugins: ["lodash-fp", "jest", "regexp"],
  settings: {
    "import/extensions": [".js", ".jsx"],
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".json"]
      }
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
    "no-unused-vars": ["error", {"argsIgnorePattern": "^_"}],
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
    "import/extensions": ["error", "never"]
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
