/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/consistent-type-imports */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

export type InteropDefault<T> = T extends { default: infer U } ? U : T;

/* #__NO_SIDE_EFFECTS__ */
function interopDefault<T>(m: T): InteropDefault<T> {
	return (m as any).default || m;
}

import * as _pluginNode from 'eslint-plugin-n';
export const pluginNode: typeof import('eslint-plugin-n') =
	interopDefault(_pluginNode);

import * as _pluginReact from 'eslint-plugin-react';
export const pluginReact: typeof import('eslint-plugin-react') =
	interopDefault(_pluginReact);

import * as _pluginReactHook from 'eslint-plugin-react-hooks';
export const pluginReactHook: typeof import('eslint-plugin-react-hooks') =
	interopDefault(_pluginReactHook);

import * as _pluginJsxA11y from 'eslint-plugin-jsx-a11y';
export const pluginJsxA11y: typeof import('eslint-plugin-jsx-a11y') =
	interopDefault(_pluginJsxA11y);

import * as _configPrettier from 'eslint-config-prettier';
export const configPrettier: any = interopDefault(_configPrettier);

import tsEslint from 'typescript-eslint';
export { tsEslint };

export * as pluginImport from 'eslint-plugin-import-x';
