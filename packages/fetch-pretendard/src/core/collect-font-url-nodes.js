import * as csstree from 'css-tree';

/**
 *
 * @param {import('css-tree').CssNode} node
 * @returns {import('css-tree').Url[]}
 */
export default function collectFontUrlNodes(node) {
	const nonEmptyFontFaceNodes = csstree.findAll(node, isNonEmptyFontFaceNode);

	const srcNodes = nonEmptyFontFaceNodes.flatMap((node) =>
		csstree.findAll(node, isSrcNode),
	);

	const urlNodes = /** @type {import('css-tree').Url[]} */ (
		srcNodes.flatMap((node) => csstree.findAll(node, isUrlNode))
	);

	return urlNodes;
}

/** @type {import('css-tree').FindFn} */
const isNonEmptyFontFaceNode = (node) =>
	node.type === 'Atrule' && node.name === 'font-face' && node.block !== null;

/** @type {import('css-tree').FindFn} */
const isSrcNode = (node) =>
	node.type === 'Declaration' && node.property === 'src';

/** @type {import('css-tree').FindFn} */
const isUrlNode = (node) => node.type === 'Url';
