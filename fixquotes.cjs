const fs = require('fs');
const path = require('path');
const root = process.argv[2] || path.join('src', 'content', 'es');
function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) { walk(p); continue; }
    if (!p.endsWith('.mdx')) continue;
    let c = fs.readFileSync(p, 'utf8');
    const before = c;
    c = c.replace(/\u2018|\u2019|\u201A|\u201B|\u2032|\u0060/g, "'");
    if (c !== before) { fs.writeFileSync(p, c, 'utf8'); console.log('fixed:', p); }
  }
}
walk(root);