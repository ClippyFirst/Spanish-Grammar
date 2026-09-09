const fs = require('fs');
const path = require('path');
const hold = path.join('src', 'content', '_hold');
const esDir = path.join('src', 'content', 'es');
if (fs.existsSync(hold)) {
  for (const e of fs.readdirSync(hold, { withFileTypes: true })) {
    const srcP = path.join(hold, e.name);
    if (e.isDirectory()) {
      const destP = path.join(esDir, e.name);
      if (!fs.existsSync(destP)) fs.renameSync(srcP, destP);
      else {
        for (const f of fs.readdirSync(srcP)) fs.renameSync(path.join(srcP, f), path.join(destP, f));
        fs.rmdirSync(srcP);
      }
    } else {
      fs.renameSync(srcP, path.join(esDir, 'verbs', e.name));
    }
  }
  fs.rmdirSync(hold);
  console.log('hold restored');
}
function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (p.endsWith('.mdx')) {
      let c = fs.readFileSync(p, 'utf8');
      const before = c;
      c = c.replace(/^slug: .*\r?\n/m, '');
      if (c !== before) {
        fs.writeFileSync(p, c, 'utf8');
        console.log('slug removed:', p);
      }
    }
  }
}
walk(esDir);