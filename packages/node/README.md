## BrainyLab eslint-config-node

this is the node configuration of ESLint is used in the Projects made by BrainyLab Development.

## Install Config

```bash
# npm
npm i --save-dev eslint prettier @brainylab/eslint-config-node

#yarn
yarn add -D eslint prettier @brainylab/eslint-config-node

#pnpm
pnpm add -D eslint prettier @brainylab/eslint-config-node
```

## Usage Flat Config - ESlint 9+

Require Node.js >= 18.18, and ESLint >= 8.56.0.
create file eslint.config.js or EMS eslint.config.mjs in main project folder, add the lines below in the file.

```js
import { nodeConfig } from '@brainylab/eslint-config-node';

export default nodeConfig
```

#### Config Prettier

This library focuses on linter and prettier was separated for better performance, to use prettier together with ESlint, following this documentation
[BrainyLab Prettier Config](https://www.npmjs.com/package/@brainylab/prettier-config)

### Config VS Code to auto fix

Install [ESlint Plugin on VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint):

create ou alter `.vscode/settings.json`.

```json
{
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": "explicit"
	},

	// eslint >= 8.56.0 and < 9 add line on VSCode
	"eslint.experimental.useFlatConfig": true
}
```

## License

MIT
