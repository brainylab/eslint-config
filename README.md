## BrainyLab eslint-config
this is the base configuration of ESLint is used in the Projects made by BrainyLab Development.

## Install Config

### usage npm
```bash
# npm
npm i --save-dev eslint prettier @brainylab/eslint-config

#yarn
yarn add -D eslint prettier @brainylab/eslint-config

#pnpm
pnpm add -D eslint prettier @brainylab/eslint-config
```

## Usage Config

create file .eslintrc.json in main project folder, add the lines below in the file.

```json
// node version
{
  "extends": "@brainylab/eslint-config/node"
}

// react
{
  "extends": "@brainylab/eslint-config/react"
}

// react-native
{
  "extends": "@brainylab/eslint-config/react-native"
}

// next
{
  "extends": "@brainylab/eslint-config/next"
}
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

## License

MIT
