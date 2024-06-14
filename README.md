## BrainyLab eslint-config

this is the base configuration of ESLint is used in the Projects made by BrainyLab Development.

## Install Config

```bash
# npm
npm i --save-dev eslint prettier @brainylab/eslint-config

#yarn
yarn add -D eslint prettier @brainylab/eslint-config

#pnpm
pnpm add -D eslint prettier @brainylab/eslint-config
```

## Usage Flat Config - ESlint 9+

Require Node.js >= 18.18, and ESLint >= 8.56.0.
create file eslint.config.js or EMS eslint.config.mjs in main project folder, add the lines below in the file.

```js
import { createConfig } from '@brainylab/eslint-config';
export default createConfig({
  configs: [
    /* your custom config */
  ],
  presets: {
    node: true,
    typescript: true,
  },
});
```

### Presets

```javascript
import { presets } from '@brainylab/eslint-config/configs';
export default [
  [
    /* your custom config */
  ],
  // using base config
  ...presets.base,
  // using typescript config
  ...presets.typescript,
  // using typescript config
  ...presets.node,
];
```

#### Config Prettier

This library focuses on linter and prettier was separated for better performance, to use prettier together with ESlint, following this documentation
[BrainyLab Prettier Config](https://www.npmjs.com/package/@brainylab/prettier-config)

## Usage Config Legacy

create file .eslintrc.json in main project folder, add the lines below in the file.

#### config node project

```json
{
  "extends": "@brainylab/eslint-config/node"
}
```

#### config react project

```json
{
  "extends": "@brainylab/eslint-config/react"
}
```

#### config react-native project

```json
{
  "extends": "@brainylab/eslint-config/react-native"
}
```

#### config next project

```json
{
  "extends": "@brainylab/eslint-config/next"
}
```

### Config VS Code to auto fix

create ou alter `.vscode/settings.json`.

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

## License

MIT
