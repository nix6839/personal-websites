/**
 * @param {string} str
 * @returns {string}
 */
export default function lastSegmentOfUrl(str) {
	const segments = str.split('/');
	return segments.at(-1) ?? '';
}
