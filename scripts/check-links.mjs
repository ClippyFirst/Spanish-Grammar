// Link checker: verifies Markdown links (/es/...) and frontmatter `related`
// resolve to real content pages or categories. Usage: node scripts/check-links.mjs
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, 'src', 'content', 'es');

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.mdx?$/.test(e.name)) out.push(p);
  }
  return out;
}

const files = walk(CONTENT_DIR);
const pageUrls = new Set();
for (const f of files) {
  const rel = path.relative(CONTENT_DIR, f).replace(/\\/g, '/').replace(/\.mdx?$/i, '');
  pageUrls.add(`/es/${rel}/`);
}
// Category index pages also exist.
const categories = new Set(files.map((f) => path.relative(CONTENT_DIR, f).split(path.sep)[0]));
for (const c of categories) pageUrls.add(`/es/${c}/`);

let problems = 0;
for (const f of files) {
  const text = fs.readFileSync(f, 'utf8');
  const body = text.replace(/^---\r?\n[\s\S]*?\r?\n---/, '');
  const links = [...body.matchAll(/\]\((\/[^)\s]+)\)/g)].map((m) => m[1]);
  for (const link of links) {
    if (link.startsWith('/es/')) {
      const norm = link.endsWith('/') ? link : link + '/';
      if (!pageUrls.has(norm) && ![...pageUrls].some((u) => norm.startsWith(u))) {
        console.log(`  BROKEN ${path.relative(ROOT, f)} -> ${link}`);
        problems++;
      }
    }
  }
}
console.log(`check-links: ${files.length} files, ${pageUrls.size} known URLs, ${problems} broken /es/ links`);
process.exit(problems ? 1 : 0);
