import { parseArgs as nodeParseArgs } from 'node:util';

/**
 * @typedef {NonNullable<import('node:util').ParseArgsConfig['options']>} ParseArgsOptionsConfig
 */

/** @satisfies {ParseArgsOptionsConfig} */
const options = {
	'css-url': {
		type: 'string',
	},
	'font-output-dir': {
		type: 'string',
	},
	'css-output-path': {
		type: 'string',
	},
};

export default function parseArgs() {
	const { values } = nodeParseArgs({ options });

	const {
		'css-url': cssUrl,
		'font-output-dir': fontOutputDir,
		'css-output-path': cssOutputPath,
	} = values;

	if (cssUrl === undefined) {
		throw new Error('Need --css-url <url> argument.');
	}

	if (fontOutputDir === undefined) {
		throw new Error('Need --fontOutputDir <dir> argument.');
	}

	if (!URL.canParse(cssUrl)) {
		throw new Error(`"${cssUrl}" is a invalid URL.`);
	}

	return { cssUrl, fontOutputDir, cssOutputPath };
}
