# Skoach ESLint Config

This is a shareable config for easy use in our JS projects.

## Usage

Add the package and plugin dependencies:

```bash
$ yarn add -D eslint-config-skoach eslint@7 eslint-plugin-import@2 eslint-plugin-jest@24 eslint-plugin-lodash-fp@2 eslint-plugin-react@7 eslint-plugin-react-hooks@4 eslint-plugin-regexp@0.11
```

And include it in a `.eslintrc.json` file:

```json
{
  "extends": [
    "skoach"
  ]
}
```

If using react:

```json
{
  "extends": [
    "skoach",
    "skoach/react"
  ]
}
```
