const baseConfig = require('../../prettier.config.cjs');

/** @satisfies {import('prettier').Config} */
const config = {
  ...baseConfig,

  tailwindConfig: './tailwind.config.ts',
};

module.exports = config;
