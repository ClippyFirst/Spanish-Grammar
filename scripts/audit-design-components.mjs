import fs from 'node:fs';
import path from 'node:path';

const R = process.cwd();
const D = path.join(R, 'src');
const files = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    entry.isDirectory() ? walk(p) : files.push(p);
  }
}
walk(D);

const css = files
  .filter((x) => x.endsWith('.css'))
  .map((x) => fs.readFileSync(x, 'utf8'))
  .join('\n');

const required = ['site-header', 'site-footer', 'layout-doc', 'toc', 'page-head', 'prose', 'formula', 'example', 'mistake', 'related', 'search-bar'];
const missing = required.filter((x) => !new RegExp('\\.' + x + '\\b').test(css));

console.log('required styles:', required.length);
console.log('missing:', missing.length ? missing.join(', ') : 'none');

if (missing.length) process.exitCode = 1;
