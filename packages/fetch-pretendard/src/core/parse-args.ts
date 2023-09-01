import { parseArgs as nodeParseArgs } from 'node:util';
import isUrl from '../lib/is-url.js';

import type { ParseArgsConfig } from 'node:util';

type ParseArgsOptionsConfig = NonNullable<ParseArgsConfig['options']>;

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
} satisfies ParseArgsOptionsConfig;

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

  if (!isUrl(cssUrl)) {
    throw new Error(`"${cssUrl}" is a invalid URL.`);
  }

  return { cssUrl, fontOutputDir, cssOutputPath };
}
