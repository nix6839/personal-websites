/**
 * @param {string} relativeUrl
 * @param {string} baseUrl
 * @returns {string}
 */
export default function toAbsoluteUrl(relativeUrl, baseUrl) {
	return new URL(relativeUrl, baseUrl).href;
}
