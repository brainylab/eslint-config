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
    "source.fixAll.eslint": true
  }
}
```

## License

MIT
