import axios from 'axios';
import * as fs from 'node:fs/promises';

export default async function downloadFile(
  fileUrl: string,
  outputPath: string,
) {
  const response = await axios.get(fileUrl, {
    responseType: 'stream',
  });
  await fs.writeFile(outputPath, response.data);
}
