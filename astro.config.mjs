// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const base = process.env.PUBLIC_BASE || '/';
const site = process.env.SITE_URL;

if (process.env.CI && !site) {
  throw new Error('SITE_URL must be set in CI for canonical URLs and sitemap generation.');
}

export default defineConfig({
  site: site || 'http://localhost:4321',
  base,
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
