import type { Config } from 'tailwindcss';

const config = {
  content: ['./src/**/*.astro'],
  corePlugins: {
    preflight: false,
  },
} satisfies Config;

export default config;
