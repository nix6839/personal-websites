import * as csstree from 'css-tree';

import type { FindFn } from 'css-tree';

export default function collectFontUrlNodes(
  node: csstree.CssNode,
): csstree.Url[] {
  const nonEmptyFontFaceNodes = csstree.findAll(node, isNonEmptyFontFaceNode);

  const srcNodes = nonEmptyFontFaceNodes.flatMap((node) =>
    csstree.findAll(node, isSrcNode),
  );

  const urlNodes = srcNodes.flatMap((node) =>
    csstree.findAll(node, isUrlNode),
  ) as csstree.Url[];

  return urlNodes;
}

const isNonEmptyFontFaceNode: FindFn = (node) =>
  node.type === 'Atrule' && node.name === 'font-face' && node.block !== null;

const isSrcNode: FindFn = (node) =>
  node.type === 'Declaration' && node.property === 'src';

const isUrlNode: FindFn = (node) => node.type === 'Url';
