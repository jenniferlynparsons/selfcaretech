// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://selfcare.tech',
  base: '/', // Explicitly set base path for custom domain
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  }
});
