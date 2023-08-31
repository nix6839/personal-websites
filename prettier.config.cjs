const tailwind = require('prettier-plugin-tailwindcss');
const astro = require('prettier-plugin-astro');

/** @satisfies {import('prettier').Config} */
const config = {
  ...require('@nix6839/prettier-config'),

  plugins: [tailwind],

  overrides: [
    {
      files: '*.astro',
      options: {
        plugins: [astro, tailwind],
        parser: 'astro',
        astroAllowShorthand: true,
      },
    },
  ],
};

module.exports = config;
