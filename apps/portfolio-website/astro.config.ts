import tailwindIntegration from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
const config = defineConfig({
  site: 'https://yeongwoo.dev',
  integrations: [
    tailwindIntegration({
      applyBaseStyles: false,
    }),
  ],
});

export default config;
