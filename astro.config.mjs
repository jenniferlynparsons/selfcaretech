// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind()],
  output: 'static',
  site: 'https://jenniferlynparsons.github.io',
  base: '/selfcaretech',
  build: {
    assets: '_assets'
  }
});
