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

const min = [...css.matchAll(/@media\s*\([^)]*min-width\s*:\s*(\d+)px/g)].map((m) => +m[1]);
const max = [...css.matchAll(/@media\s*\([^)]*max-width\s*:\s*(\d+)px/g)].map((m) => +m[1]);

console.log('min breakpoints:', [...new Set(min)].sort((a, b) => a - b).join(', ') || 'none');
console.log('max breakpoints:', [...new Set(max)].sort((a, b) => a - b).join(', ') || 'none');
console.log('overflow guards:', /overflow-x\s*:\s*auto/.test(css));
console.log('mobile navigation:', /mobile-menu/.test(css));
console.log('mobile TOC:', /toc-mobile/.test(css));

if (!min.length || !max.length) process.exitCode = 1;
