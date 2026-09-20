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

const src = files
  .filter((x) => /\.(astro|mdx)$/.test(x))
  .map((x) => fs.readFileSync(x, 'utf8'))
  .join('\n');

const css = files
  .filter((x) => x.endsWith('.css'))
  .map((x) => fs.readFileSync(x, 'utf8'))
  .join('\n');

const checks = [
  ['images-without-alt', /<img(?![^>]*\balt=)[^>]*>/gi],
  ['autofocus', /\bautofocus\b/gi],
  ['tabindex-positive', /tabindex=["']?[1-9]/gi],
];

let fail = 0;
for (const [name, re] of checks) {
  const count = (src.match(re) || []).length;
  console.log(name + ':', count);
  if (count) fail++;
}

console.log('focus-visible:', /:focus-visible\b/.test(css));
console.log('reduced-motion:', /prefers-reduced-motion/.test(css));
console.log('semantic-nav:', /<nav\b/.test(src));

if (fail) process.exitCode = 1;
