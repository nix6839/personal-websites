import baseConfig from '../../prettier.config.js';

/** @satisfies {import('prettier').Config} */
const config = {
  ...baseConfig,

  tailwindConfig: './tailwind.config.ts',
};

export default config;
