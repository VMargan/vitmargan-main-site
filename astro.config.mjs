// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://vitmargan.be',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'nl'],
    routing: {
      prefixDefaultLocale: false, // EN = "/", FR = "/fr", NL = "/nl"
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
