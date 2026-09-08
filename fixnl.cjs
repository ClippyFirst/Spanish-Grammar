const fs = require('fs');
const path = require('path');
function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (p.endsWith('.mdx')) {
      const c = fs.readFileSync(p, 'utf8');
      if (c.includes('`n---')) {
        const n = c.replace(/`n---/g, '\n---');
        fs.writeFileSync(p, n, 'utf8');
        console.log('fixed:', p);
      }
    }
  }
}
walk('src/content');