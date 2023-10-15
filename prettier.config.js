import hwyConfig from '@nix6839/prettier-config';

const tailwind = 'prettier-plugin-tailwindcss'
const astro = 'prettier-plugin-astro'

/** @satisfies {import('prettier').Config} */
const config = {
  ...hwyConfig,

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

export default config;
