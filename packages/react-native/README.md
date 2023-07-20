## BrainyLab eslint-config
this is the react configuration of ESLint is used in the Projects made by BrainyLab Development.

## Install Config

### usage npm
```bash
npm i --save-dev eslint @brainylab/eslint-config-react-native
```

### usage yarn
```bash
yarn add -D eslint @brainylab/eslint-config-react-native
```
## Usage Config

create file .eslintrc.js in main project folder, add the lines below in the file.

```js
module.exports = {
  extends: ['@brainylab/eslint-config-react-native'],
};
```
### Config VS Code to auto fix

create ou alter `.vscode/settings.json`.

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### Prettier Config

create prettier config `prettier.config.js` in main project folder

```javascript
module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
};
```

## License

MIT
