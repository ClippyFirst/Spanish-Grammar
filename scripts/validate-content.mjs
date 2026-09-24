// Structural/editorial frontmatter validator for the grammar corpus.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, 'src', 'content', 'es');
const COMPARISONS_DIR = path.join(ROOT, 'src', 'content', 'comparisons');
const CATEGORIES_FILE = path.join(ROOT, 'src', 'data', 'categories.ts');

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file, out);
    else if (/\.mdx?$/.test(entry.name)) out.push(file);
  }
  return out;
}

function frontmatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return { data: {}, lists: {}, error: 'missing frontmatter block' };

  const data = {};
  const lists = {};
  let current = null;
  const errors = [];

  for (const rawLine of match[1].split(/\r?\n/)) {
    const line = rawLine.trimEnd();
    if (!line.trim() || /^\s*#/.test(line)) continue;

    const scalar = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*:\s*(.*)$/);
    if (scalar) {
      current = scalar[1];
      let value = scalar[2].trim();
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      if (value === '[]') lists[current] = [];
      else data[current] = value;
      continue;
    }

    const item = line.match(/^\s*-\s+(.*)$/);
    if (item && current) {
      lists[current] ??= [];
      let value = item[1].trim();
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      lists[current].push(value);
      continue;
    }

    if (/^\s+\S/.test(line)) errors.push('suspicious continuation: ' + line.trim().slice(0, 100));
  }

  return { data, lists, errors };
}

const files = walk(CONTENT_DIR).sort();
const categorySource = fs.existsSync(CATEGORIES_FILE) ? fs.readFileSync(CATEGORIES_FILE, 'utf8') : '';
const categories = new Set([...categorySource.matchAll(/key:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]));
const pages = new Set(files.map((file) => path.relative(CONTENT_DIR, file).replace(/\\/g, '/').replace(/\.mdx?$/, '')));
const basenames = new Map();

for (const page of pages) {
  const key = page.split('/').pop();
  const bucket = basenames.get(key) ?? [];
  bucket.push(page);
  basenames.set(key, bucket);
}

function resolve(target) {
  if (pages.has(target) || categories.has(target)) return target;
  const matches = basenames.get(target) ?? [];
  return matches.length === 1 ? matches[0] : null;
}

const required = ['title_uk', 'title_es', 'title_en', 'short_description', 'category'];
const relationFields = ['related', 'prerequisites', 'contrasts', 'extensions', 'exceptions'];
const allowedRegions = new Set(['general', 'spain', 'latin-america', 'rioplatense', 'mexico', 'caribbean']);
const allowedReview = new Set(['draft', 'reviewed', 'verified']);

const errors = [];
const warnings = [];

for (const file of files) {
  const relative = path.relative(ROOT, file);
  const text = fs.readFileSync(file, 'utf8');
  const parsed = frontmatter(text);

  if (parsed.error) errors.push(relative + ': ' + parsed.error);
  for (const warning of parsed.errors ?? []) warnings.push(relative + ': ' + warning);

  for (const field of required) {
    if (!parsed.data[field]) errors.push(relative + ': missing required field ' + field);
  }

  if (parsed.data.category && !categories.has(String(parsed.data.category))) {
    errors.push(relative + ': unknown category ' + parsed.data.category);
  }

  if (parsed.data.region && !allowedRegions.has(String(parsed.data.region))) {
    errors.push(relative + ': invalid region ' + parsed.data.region);
  }

  if (parsed.data.review_status && !allowedReview.has(String(parsed.data.review_status))) {
    errors.push(relative + ': invalid review_status ' + parsed.data.review_status);
  }

  if (parsed.data.updated && !/^\d{4}-\d{2}-\d{2}$/.test(String(parsed.data.updated))) {
    errors.push(relative + ': updated must be YYYY-MM-DD');
  }

  for (const field of relationFields) {
    const values = parsed.lists[field] ?? [];
    const seen = new Set();
    for (const target of values) {
      if (seen.has(target)) warnings.push(relative + ': duplicate ' + field + ' target ' + target);
      seen.add(target);
      const resolved = resolve(target);
      if (!resolved) {
        const candidates = basenames.get(target) ?? [];
        errors.push(relative + ': ' + field + ' target ' + target + (candidates.length > 1 ? ' is ambiguous: ' + candidates.join(', ') : ' does not resolve'));
      }
      const currentPage = path.relative(CONTENT_DIR, file).replace(/\\/g, '/').replace(/\.mdx?$/, '');
      if (resolved === currentPage) errors.push(relative + ': self-link in ' + field + ': ' + target);
    }
  }

  const fmRaw = (text.match(/^---\r?\n([\s\S]*?)\r?\n---/) || [])[1] || '';
  for (const key of ['title_uk', 'title_es', 'title_en', 'short_description']) {
    const line = fmRaw.split(/\r?\n/).find((item) => new RegExp('^\\s*' + key + '\\s*:').test(item));
    if (line) {
      const value = line.split(':').slice(1).join(':').trim();
      if (!/^['"]/.test(value) && value.includes(': ')) {
        errors.push(relative + ': ' + key + ' contains an unquoted YAML colon');
      }
    }
  }
}

const comparisonFiles = walk(COMPARISONS_DIR).sort();
for (const file of comparisonFiles) {
  const relative = path.relative(ROOT, file);
  const text = fs.readFileSync(file, 'utf8');
  const parsed = frontmatter(text);
  if (parsed.error) errors.push(relative + ': ' + parsed.error);
  for (const field of ['title', 'description']) {
    if (!parsed.data[field]) errors.push(relative + ': missing required field ' + field);
  }
  if (parsed.data.order && !/^\d+(?:\.\d+)?$/.test(String(parsed.data.order))) {
    errors.push(relative + ': order must be numeric');
  }
  if (parsed.data.featured && !['true', 'false'].includes(String(parsed.data.featured))) {
    errors.push(relative + ': featured must be true or false');
  }
}

console.log('validate-content: ' + files.length + ' grammar files, ' + comparisonFiles.length + ' comparison files, ' + pages.size + ' grammar pages, ' + categories.size + ' categories');
if (warnings.length) {
  console.log('\nWARNINGS (' + warnings.length + '):');
  for (const warning of warnings) console.log('  WARN ' + warning);
}
if (errors.length) {
  console.log('\nERRORS (' + errors.length + '):');
  for (const error of errors) console.log('  ERR ' + error);
  process.exit(1);
}
console.log('\nOK: no blocking content errors.');
