// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// For GitHub Pages project sites under a sub-path, set a base in build:
//   Windows PowerShell (project site, hosted at /repo-name/):
//     $env:PUBLIC_BASE = "/repo-name"
//   Custom domain or user/org site root: leave unset (default "/").
const base = process.env.PUBLIC_BASE || '/';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.org',
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
