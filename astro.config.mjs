import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import yaml from '@rollup/plugin-yaml';

// Set BASE_PATH env var when deploying to a subdirectory, e.g. BASE_PATH=/IEIN
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  output: 'static',
  base,
  site: process.env.SITE,
  vite: {
    plugins: [
      tailwindcss(),
      yaml(),
    ],
  },
});
