// @ts-check

import eslint from '@eslint/js';
import gitignore from 'eslint-config-flat-gitignore';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginAstro from 'eslint-plugin-astro';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import * as tsParserForExtraFiles from 'typescript-eslint-parser-for-extra-files';

const config = tseslint.config(
	gitignore({ root: true }),
	{
		ignores: [
			'eslint.config.js',
			'**/{astro,tailwind,prettier}.config.{js,ts}',
		],
	},
	eslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	{
		languageOptions: {
			parser: tsParserForExtraFiles,
			parserOptions: {
				/**
				 * Does not work glob project with eslint-plugin-astro
				 * Waiting release: https://github.com/ota-meshi/eslint-plugin-astro/pull/345
				 */
				// project: ['{apps,packages}/*/tsconfig.json'],
			},
		},
		rules: {
			'@typescript-eslint/array-type': [
				'error',
				{ default: 'array-simple', readonly: 'array-simple' },
			],
		},
	},
	...eslintPluginAstro.configs['flat/recommended'],
	{
		files: ['**/*.astro'],
		languageOptions: {
			parserOptions: {
				parser: tsParserForExtraFiles,
			},
		},
	},
	{
		files: ['apps/portfolio/**/*'],
		languageOptions: {
			parserOptions: {
				project: ['apps/portfolio/tsconfig.json'],
			},
		},
	},
	{
		files: ['packages/fetch-pretendard/**/*'],
		languageOptions: {
			parserOptions: {
				project: ['packages/fetch-pretendard/tsconfig.json'],
			},
			globals: {
				...globals.node,
			},
		},
	},
	eslintConfigPrettier,
);

export default config;
