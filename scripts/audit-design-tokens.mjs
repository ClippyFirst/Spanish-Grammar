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

const designFile = path.join(D, 'styles', 'gramaticarrona.css');
const css = fs.readFileSync(designFile, 'utf8');
const checkCss = css.replace(/:root\s*\\{[\s\\S]*?\\}/g, '');

const checks = [
  ['inline-colors', /(?:^|[;{\s])(?:color|background(?:-color)?|border(?:-color)?):\s*#[0-9a-f]{3,8}/gi],
  ['hard-radius', /border-radius:\s*(?:[1-9]|[1-9]\d+)px/gi],
  ['shadows', /box-shadow\s*:/gi],
  ['system-ui', /font-family:[^;]*system-ui/gi],
];

let fail = 0;
for (const [name, re] of checks) {
  const count = (checkCss.match(re) || []).length;
  console.log(name + ':', count);
  if (count) fail++;
}

console.log('custom properties:', (css.match(/--[\w-]+\s*:/g) || []).length);

if (fail) process.exitCode = 1;
