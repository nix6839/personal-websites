import hwyPrettierConfig from '@nix6839/prettier-config';
import axios, { isAxiosError } from 'axios';
import * as csstree from 'css-tree';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import * as prettier from 'prettier';
import collectFontUrlNodes from './core/collect-font-url-nodes.js';
import parseArgs from './core/parse-args.js';
import downloadFile from './lib/download-file.js';
import isValidCSS from './lib/is-valid-css.js';
import lastSegment from './lib/last-segment-of-url.js';
import toAbsoluteUrl from './lib/to-absolute-url.js';

try {
  await main();
} catch (err) {
  const errorCode = handleError(err);
  process.exit(errorCode);
}

async function main(): Promise<void> {
  const { cssUrl, fontOutputDir, cssOutputPath } = parseArgs();

  const { data: css } = await axios.get<string>(cssUrl);

  if (!isValidCSS(css)) {
    throw new Error(`"${cssUrl}" is a invalid CSS.`);
  }

  const ast = csstree.parse(css);
  const fontUrlNodes = collectFontUrlNodes(ast);

  const fontUrls = fontUrlNodes.map((node) => node.value);
  const absoluteFontUrls = fontUrls.map((url) => toAbsoluteUrl(url, cssUrl));
  await Promise.all(
    absoluteFontUrls.map((url) =>
      downloadFile(url, path.join(fontOutputDir, lastSegment(url))),
    ),
  );

  if (cssOutputPath === undefined) {
    return;
  }

  for (const node of fontUrlNodes) {
    node.value = path.join('/fonts/', lastSegment(node.value));
  }
  const newCSS = csstree.generate(ast);
  const formattedNewCSS = await prettier.format(newCSS, {
    ...hwyPrettierConfig,
    parser: 'css',
  });
  await fs.writeFile(cssOutputPath, formattedNewCSS);
}

function handleError(err: unknown): number {
  if (isAxiosError(err)) {
    console.error(err);
    return 1;
  }

  if (err instanceof Error) {
    console.error(err.message);
    return 1;
  }

  console.error(err);
  return 1;
}
