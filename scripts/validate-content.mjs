// Frontmatter + related-links validator.
// Usage: node scripts/validate-content.mjs
// Exit 0 = clean, 1 = problems found. Never throws on missing files.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, 'src', 'content', 'es');
const CATEGORIES_FILE = path.join(ROOT, 'src', 'data', 'categories.ts');

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.mdx?$/.test(e.name)) out.push(p);
  }
  return out;
}

function parseFrontmatter(text, file) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return { error: 'missing frontmatter block', data: {} };
  const data = {};
  const errors = [];
  let currentKey = null;
  for (const raw of m[1].split(/\r?\n/)) {
    const line = raw.trimEnd();
    if (/^\s*#/.test(line) || line.trim() === '') continue;
    const kv = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*:\s*(.*)$/);
    if (kv) {
      currentKey = kv[1];
      let v = kv[2].trim();
      if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
        v = v.slice(1, -1);
      }
      if (v === '' || v === '[]') data[currentKey] = [];
      else data[currentKey] = v;
    } else if (/^\s*-\s+/.test(line) && currentKey) {
      let v = line.replace(/^\s*-\s+/, '').trim();
      if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
      if (!Array.isArray(data[currentKey])) data[currentKey] = data[currentKey] === undefined || data[currentKey] === '' ? [] : [data[currentKey]];
      data[currentKey].push(v);
    } else if (/^\s+\S/.test(line)) {
      errors.push(`suspicious continuation line: ${line.trim().slice(0, 80)}`);
    }
  }
  return { data, errors };
}

const files = walk(CONTENT_DIR);
let categoryKeys = new Set();
try {
  const catSrc = fs.readFileSync(CATEGORIES_FILE, 'utf8');
  for (const m of catSrc.matchAll(/key:\s*['"]([^'"]+)['"]/g)) categoryKeys.add(m[1]);
} catch { /* ignore */ }

const slugs = new Set(files.map((f) => path.basename(f).replace(/\.mdx?$/i, '')));
const errors = [];
const warnings = [];

// YAML colon-smell: unquoted title/short_description containing ": " outside quotes.
for (const f of files) {
  const text = fs.readFileSync(f, 'utf8');
  const fmRaw = (text.match(/^---\r?\n([\s\S]*?)\r?\n---/) || [])[1] || '';
  for (const key of ['title_uk', 'title_es', 'title_en', 'short_description']) {
    const line = fmRaw.split(/\r?\n/).find((l) => new RegExp(`^\\s*${key}\\s*:`).test(l));
    if (line) {
      const val = line.split(/:/).slice(1).join(':').trim();
      const quoted = /^['"].*['"]$/.test(val);
      if (!quoted && val.includes(':')) {
        errors.push(`${path.relative(ROOT, f)}: ${key} contains unquoted colon -> quote it: ${line.trim().slice(0, 100)}`);
      }
    }
  }
  const { data, errors: fmErr } = parseFrontmatter(text, f);
  for (const e of fmErr) warnings.push(`${path.relative(ROOT, f)}: ${e}`);
  for (const req of ['title_uk', 'title_es', 'title_en', 'short_description', 'category']) {
    if (data[req] === undefined || data[req] === '' || (Array.isArray(data[req]) && data[req].length === 0)) {
      errors.push(`${path.relative(ROOT, f)}: missing required frontmatter field "${req}"`);
    }
  }
  if (data.category && categoryKeys.size && !categoryKeys.has(String(data.category))) {
    errors.push(`${path.relative(ROOT, f)}: unknown category "${data.category}"`);
  }
  const rel = Array.isArray(data.related) ? data.related : [];
  for (const r of rel) {
    if (!slugs.has(r) && !categoryKeys.has(r)) {
      warnings.push(`${path.relative(ROOT, f)}: related "${r}" resolves to no page/category (filtered at runtime)`);
    }
  }
  // MDX apostrophe smell: single-quoted JS string containing ' (breaks acorn).
  const mdxBody = text.replace(/^---\r?\n[\s\S]*?\r?\n---/, '');
  const badStrings = mdxBody.match(/=\{\{\s*es:\s*'[^']*'[^}]*\}\}/g) || [];
  for (const b of badStrings) {
    if (/'[^']*['’]/.test(b.replace(/^=\{\{\s*es:\s*'/, ''))) {
      // handled below more precisely; keep as warning class
    }
  }
  // Heuristic: single-quoted JS string that actually contains an ASCII apostrophe
  // (U+0027) as in п'ятниці. Count only straight apostrophes — UTF-8 multibyte
  // text (й, é, ñ...) must NOT trigger this. Lines without inner ' are clean.
  const lines = mdxBody.split(/\r?\n/);
  lines.forEach((ln, i) => {
    if (!/(uk|es|bad|good|why)\s*[:=]/.test(ln)) return;
    // Find '...' spans on this line; if any span's inner text contains a
    // straight apostrophe that is surrounded by letters, flag it.
    const spans = ln.match(/'[^'\n]*'/g) || [];
    // Reconstruct: a line like  uk: 'З понеділка до п\'ятниці.' contains 3 quotes.
    const quoteCount = (ln.match(/'/g) || []).length;
    // Odd quote count on a prop line is a strong apostrophe signal
    // (open + close + one inner). Even counts with letter-surrounded ' also count.
    const hasInnerApostrophe = /[A-Za-zА-Яа-яІіЇїЄєҐґ]\'[A-Za-zА-Яа-яІіЇїЄєҐґ]/.test(ln);
    if (quoteCount % 2 === 1 || (hasInnerApostrophe && spans.length > 0 && /(uk|es)\s*:/.test(ln))) {
      // Only flag when the apostrophe is inside a '...' value (not in "double" attrs).
      if (hasInnerApostrophe && /:\s*'[^'\n]*[A-Za-zА-Яа-яІіЇїЄєҐґ]'[A-Za-zА-Яа-яІіЇїЄєҐґ]/.test(ln)) {
        warnings.push(`${path.relative(ROOT, f)}:${i + 1}: single-quoted JS string contains apostrophe -> use double quotes: ${ln.trim().slice(0, 110)}`);
      } else if (quoteCount % 2 === 1 && /:\s*'/.test(ln)) {
        warnings.push(`${path.relative(ROOT, f)}:${i + 1}: unbalanced single quotes (likely apostrophe) -> use double quotes: ${ln.trim().slice(0, 110)}`);
      }
    }
  });
}

console.log(`validate-content: ${files.length} files, ${slugs.size} slugs, ${categoryKeys.size} categories`);
if (warnings.length) {
  console.log(`\nWARNINGS (${warnings.length}):`);
  for (const w of warnings) console.log('  WARN ' + w);
}
if (errors.length) {
  console.log(`\nERRORS (${errors.length}):`);
  for (const e of errors) console.log('  ERR ' + e);
  process.exit(1);
} else {
  console.log('\nOK: no blocking errors.');
}
