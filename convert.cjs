const fs = require('fs');
const path = require('path');
const root = path.join('src', 'content', 'es');
const files = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.mdx')) files.push(p);
  }
})(root);

let changed = 0;
for (const f of files) {
  let c = fs.readFileSync(f, 'utf8');
  const re = /short_description:\s*>\-\s*\n((?:[ \t]+[^\n]*\n)+)/;
  const m = c.match(re);
  if (m) {
    const lines = m[1].split('\n').filter((l) => l.trim().length > 0);
    const joined = lines.map((l) => l.trim()).join(' ');
    const quoted = '"' + joined.replace(/"/g, '\\"') + '"';
    c = c.replace(re, 'short_description: ' + quoted + '\n');
    fs.writeFileSync(f, c, 'utf8');
    changed++;
    console.log('converted:', f);
  }
}
console.log('total converted:', changed);