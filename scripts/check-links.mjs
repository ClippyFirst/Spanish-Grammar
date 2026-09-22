// Validate internal /es/ Markdown links and frontmatter relation targets.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, 'src', 'content', 'es');

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file, out);
    else if (/\.mdx?$/.test(entry.name)) out.push(file);
  }
  return out;
}

function relationList(text, field) {
  const raw = (text.match(/^---\r?\n([\s\S]*?)\r?\n---/) || [])[1] || '';
  const values = [];
  let active = false;
  for (const line of raw.split(/\r?\n/)) {
    if (new RegExp('^' + field + ':\\s*$').test(line.trim())) { active = true; continue; }
    if (active && /^\s*-\s+/.test(line)) { values.push(line.replace(/^\s*-\s+/, '').trim().replace(/^['"]|['"]$/g, '')); continue; }
    if (active && /^\S/.test(line)) active = false;
  }
  return values;
}

const files = walk(CONTENT_DIR).sort();
const pages = new Set(files.map((file) => path.relative(CONTENT_DIR, file).replace(/\\/g, '/').replace(/\.mdx?$/, '')));
const categories = new Set(files.map((file) => path.relative(CONTENT_DIR, file).split(path.sep)[0]));
const basename = new Map();

for (const page of pages) {
  const key = page.split('/').pop();
  const bucket = basename.get(key) ?? [];
  bucket.push(page);
  basename.set(key, bucket);
}

function resolve(target) {
  if (pages.has(target) || categories.has(target)) return target;
  const matches = basename.get(target) ?? [];
  return matches.length === 1 ? matches[0] : null;
}

let problems = 0;
const relationFields = ['related', 'prerequisites', 'contrasts', 'extensions', 'exceptions'];

for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  const relative = path.relative(ROOT, file);

  for (const field of relationFields) {
    for (const target of relationList(text, field)) {
      if (!resolve(target)) {
        const matches = basename.get(target) ?? [];
        const reason = matches.length > 1 ? 'ambiguous basename: ' + matches.join(', ') : 'missing target';
        console.log('BROKEN ' + relative + ' [' + field + '] → ' + target + ' (' + reason + ')');
        problems++;
      }
    }
  }

  const body = text.replace(/^---\r?\n[\s\S]*?\r?\n---/, '');
  for (const match of body.matchAll(/\]\((\/es\/[^)\s]+)\)/g)) {
    const link = match[1];
    const target = link.replace(/^\/es\//, '').replace(/\/$/, '').replace(/[#?].*$/, '');
    if (!resolve(target)) {
      console.log('BROKEN ' + relative + ' [markdown] → ' + link);
      problems++;
    }
  }
}

console.log('check-links: ' + files.length + ' files, ' + pages.size + ' content pages, ' + problems + ' problems');
process.exit(problems ? 1 : 0);
