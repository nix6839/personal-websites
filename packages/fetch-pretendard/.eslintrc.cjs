/** @satisfies {import('eslint').Linter.Config} */
const config = {
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: './tsconfig.json',
	},
};

module.exports = config;
