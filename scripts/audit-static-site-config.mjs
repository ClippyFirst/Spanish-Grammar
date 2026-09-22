import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();

function read(rel) {
  return fs.readFileSync(path.join(ROOT, rel), 'utf8');
}

const astro = read('astro.config.mjs');
const layout = read('src/layouts/BaseLayout.astro');
const workflow = read('.github/workflows/deploy.yml');
const pkg = JSON.parse(read('package.json'));
const lock = read('package-lock.json');

const failures = [];

if (!/output:\s*['"]static['"]/.test(astro)) {
  failures.push('Astro output must remain static.');
}

if (!/base\s*=\s*process\.env\.PUBLIC_BASE\s*\|\|\s*['"]\/['"]/.test(astro)) {
  failures.push('Astro base must be controlled by PUBLIC_BASE.');
}

if (!/new URL\(withBase\(pathOrUrl\), site\)/.test(layout)) {
  failures.push('BaseLayout must resolve relative SEO URLs through withBase().');
}

if (!/absoluteSiteUrl\(a\.path\)/.test(layout)) {
  failures.push('hreflang URLs must use the same base-aware URL resolver.');
}

if (!/PUBLIC_BASE:\s*\/Spanish-Grammar/.test(workflow)) {
  failures.push('GitHub Pages deployment must set PUBLIC_BASE=/Spanish-Grammar.');
}

if (!/SITE_URL:\s*https:\/\/clippyfirst\.github\.io\s*$/.test(workflow)) {
  failures.push('GitHub Pages SITE_URL must be the origin, not the project path.');
}

if (pkg.name !== 'gramaticarrona') {
  failures.push('package.json name must be gramaticarrona.');
}

if (!/"name": "gramaticarrona"/.test(lock)) {
  failures.push('package-lock.json root package name must match package.json.');
}

if (pkg.scripts?.['qa:static'] !== 'npm run check && npm run audit:mdx && npm run validate && npm run links && npm run audit:graph && npm run audit:design && npm run build') {
  failures.push('qa:static must run the complete static-site verification pipeline.');
}

if (failures.length) {
  console.error('audit-static-site-config: FAILED');
  for (const failure of failures) console.error(' - ' + failure);
  process.exit(1);
}

console.log('audit-static-site-config: PASS');
console.log(' - static Astro output');
console.log(' - environment-controlled project base');
console.log(' - base-aware canonical/OG/hreflang URL resolution');
console.log(' - GitHub Pages origin + project base');
console.log(' - package identity consistency');
console.log(' - complete static QA pipeline');
