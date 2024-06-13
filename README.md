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

create file eslint.config.js or EMS eslint.config.mjs in main project folder, add the lines below in the file.

```javascript
import { configs } from '@brainylab/eslint-config/configs'
export default [
  [
    /* your custom config */
  ],
  // using base config
  ...configs.base,
  // using typescript config
  ...configs.typescript,
  // using typescript config
  ...configs.node
]
```

#### Config Prettier
para configurar o prettier corretamente,
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
    "source.fixAll.eslint": "explicit",
  }
}
```

## License

MIT
