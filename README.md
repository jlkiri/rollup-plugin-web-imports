# rollup-plugin-web-imports

A Rollup plugin to replace import specifiers.

## Install

```
npm install rollup-plugin-web-imports --save-dev
```

## Usage

```javascript
import webImports from `rollup-plugin-web-imports`

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  plugins: [
    webImports({
      react: "./react.js",
      "react-dom": "./react-dom.js",
      "@material-ui/core": "./@material-ui/core.js",
    })
  ]
};
```
