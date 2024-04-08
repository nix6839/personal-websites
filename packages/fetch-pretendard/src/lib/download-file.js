import axios from 'axios';
import * as fs from 'node:fs/promises';

/**
 * @param {string} fileUrl
 * @param {string} outputPath
 */
export default async function downloadFile(fileUrl, outputPath) {
	/** @type {import('axios').AxiosResponse<import('node:stream').Stream>} */
	const response = await axios.get(fileUrl, {
		responseType: 'stream',
	});
	await fs.writeFile(outputPath, response.data);
}
