// Validate internal grammar/comparison links and frontmatter relation targets.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, 'src', 'content', 'es');
const COMPARISONS_DIR = path.join(ROOT, 'src', 'content', 'comparisons');

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file, out);
    else if (/\.mdx?$/.test(entry.name)) out.push(file);
  }
  return out;
}

function slugFrom(file, baseDir) {
  return path.relative(baseDir, file).replace(/\\/g, '/').replace(/\.mdx?$/i, '');
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

const grammarFiles = walk(CONTENT_DIR).sort();
const comparisonFiles = walk(COMPARISONS_DIR).sort();
const files = [...grammarFiles, ...comparisonFiles];
const grammarPages = new Set(grammarFiles.map((file) => slugFrom(file, CONTENT_DIR)));
const comparisonPages = new Set(comparisonFiles.map((file) => slugFrom(file, COMPARISONS_DIR)));
const categories = new Set(grammarFiles.map((file) => path.relative(CONTENT_DIR, file).split(path.sep)[0]));
const basename = new Map();

for (const page of grammarPages) {
  const key = page.split('/').pop();
  const bucket = basename.get(key) ?? [];
  bucket.push(page);
  basename.set(key, bucket);
}

function resolveGrammar(target) {
  if (grammarPages.has(target) || categories.has(target)) return target;
  const matches = basename.get(target) ?? [];
  return matches.length === 1 ? matches[0] : null;
}

let problems = 0;
const relationFields = ['related', 'prerequisites', 'contrasts', 'extensions', 'exceptions'];

for (const file of grammarFiles) {
  const text = fs.readFileSync(file, 'utf8');
  const relative = path.relative(ROOT, file);

  for (const field of relationFields) {
    for (const target of relationList(text, field)) {
      if (!resolveGrammar(target)) {
        const matches = basename.get(target) ?? [];
        const reason = matches.length > 1 ? 'ambiguous basename: ' + matches.join(', ') : 'missing target';
        console.log('BROKEN ' + relative + ' [' + field + '] → ' + target + ' (' + reason + ')');
        problems++;
      }
    }
  }
}

for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  const relative = path.relative(ROOT, file);
  const body = text.replace(/^---\r?\n[\s\S]*?\r?\n---/, '');

  for (const match of body.matchAll(/\]\((\/(?:es|comparisons)\/[^)\s]+)\)/g)) {
    const original = match[1];
    const target = original.replace(/[#?].*$/, '').replace(/\/$/, '');

    if (target.startsWith('/es/')) {
      const slug = target.replace(/^\/es\//, '');
      if (!resolveGrammar(slug)) {
        console.log('BROKEN ' + relative + ' [markdown] → ' + original);
        problems++;
      }
    } else {
      let slug = target.replace(/^\/comparisons\//, '');
      if (/\.mdx?$/i.test(slug)) {
        console.log('BROKEN ' + relative + ' [comparison route contains source extension] → ' + original);
        problems++;
        continue;
      }
      if (!comparisonPages.has(slug)) {
        console.log('BROKEN ' + relative + ' [comparison markdown] → ' + original);
        problems++;
      }
    }
  }
}

console.log(
  'check-links: ' + grammarFiles.length + ' grammar files, ' +
  comparisonFiles.length + ' comparison files, ' +
  (grammarPages.size + comparisonPages.size) + ' content pages, ' +
  problems + ' problems'
);
process.exit(problems ? 1 : 0);
