import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const CONTENT = path.join(ROOT, 'src', 'content', 'es');

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file, out);
    else if (/\.mdx$/.test(entry.name)) out.push(file);
  }
  return out;
}

function frontmatter(text) {
  const raw = (text.match(/^---\r?\n([\s\S]*?)\r?\n---/) || [])[1] || '';
  const data = {};
  const lists = {};
  let active = null;
  for (const line of raw.split(/\r?\n/)) {
    const scalar = line.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*:\s*(.*)$/);
    if (scalar) {
      active = scalar[1];
      const value = scalar[2].trim();
      if (value === '[]') lists[active] = [];
      else data[active] = value.replace(/^(["'])(.*)\1$/, '$2');
      continue;
    }
    const item = line.match(/^\s+-\s+(.*)$/);
    if (item && active) {
      lists[active] ??= [];
      lists[active].push(item[1].trim().replace(/^(["'])(.*)\1$/, '$2'));
    }
  }
  return { data, lists };
}

function cells(line) {
  const s = line.trim();
  const inner = s.startsWith('|') ? s.slice(1) : s;
  const body = inner.endsWith('|') ? inner.slice(0, -1) : inner;
  return body.split('|').length;
}

function tableIssues(body) {
  const lines = body.split(/\r?\n/);
  const issues = [];
  for (let i = 0; i < lines.length - 1; i++) {
    if (!/^\s*\|.*\|\s*$/.test(lines[i])) continue;
    if (!/^\s*\|?\s*:?-{3,}.*\|\s*$/.test(lines[i + 1])) continue;
    const expected = cells(lines[i]);
    const separator = cells(lines[i + 1]);
    if (expected !== separator) issues.push({ line: i + 1, header: expected, separator });
    for (let j = i + 2; j < lines.length && /^\s*\|.*\|\s*$/.test(lines[j]); j++) {
      const actual = cells(lines[j]);
      if (actual !== expected) issues.push({ line: j + 1, header: expected, row: actual });
    }
  }
  return issues;
}

const files = walk(CONTENT).sort();
const docs = files.map(file => {
  const text = fs.readFileSync(file, 'utf8');
  const parsed = frontmatter(text);
  const rel = path.relative(CONTENT, file).replaceAll(path.sep, '/').replace(/\.mdx$/, '');
  return { file, rel, text, body: text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, ''), ...parsed };
});

const findings = {
  generated: new Date().toISOString(),
  pages: docs.length,
  duplicate_orders: [],
  forbidden_ukrainomov: [],
  emphasis_artifacts: [],
  table_mismatches: [],
  related_sections: [],
  duplicate_related_targets: [],
};

const orderMap = new Map();
for (const d of docs) {
  const category = d.data.category || d.rel.split('/')[0];
  const order = d.data.order;
  if (order == null) continue;
  const key = category + ':' + order;
  const bucket = orderMap.get(key) ?? [];
  bucket.push(d.rel);
  orderMap.set(key, bucket);
}
for (const [key, bucket] of orderMap) {
  if (bucket.length > 1) findings.duplicate_orders.push({ key, pages: bucket });
}

const forbidden = /україномов(?:ний|на|не|ні|ного|ному|ними|них|них)?|українськомов(?:ний|на|не|ні|ного|ному|ними|них)?/giu;
for (const d of docs) {
  const hits = [...d.body.matchAll(forbidden)].map(m => m[0]);
  if (hits.length) findings.forbidden_ukrainomov.push({ page: d.rel, hits: [...new Set(hits)] });
}

const artifact = /(?<!\*)\*[^\n*]+\*\*[^\n*]+\*/g;
for (const d of docs) {
  const hits = [...d.body.matchAll(artifact)].map(m => ({ match: m[0], line: d.body.slice(0, m.index).split(/\r?\n/).length }));
  if (hits.length) findings.emphasis_artifacts.push({ page: d.rel, hits });
}

for (const d of docs) {
  const issues = tableIssues(d.body);
  if (issues.length) findings.table_mismatches.push({ page: d.rel, issues });
}

for (const d of docs) {
  const matches = [...d.body.matchAll(/^##\s+Пов['’]язані теми\s*$/gim)];
  if (matches.length) {
    const sections = [];
    for (let i = 0; i < matches.length; i++) {
      const start = matches[i].index + matches[i][0].length;
      const end = matches[i + 1]?.index ?? d.body.length;
      const section = d.body.slice(start, end);
      const links = [...section.matchAll(/\]\((\/es\/[^)#?]+)\/?(?:[#?][^)]*)?\)/g)].map(m => m[1]);
      sections.push({ links, count: links.length });
    }
    findings.related_sections.push({ page: d.rel, sections });
  }
  const related = d.lists.related ?? [];
  const seen = new Set();
  const dup = related.filter(x => seen.has(x) ? true : (seen.add(x), false));
  if (dup.length) findings.duplicate_related_targets.push({ page: d.rel, duplicates: [...new Set(dup)] });
}

const totals = Object.fromEntries(Object.entries(findings).filter(([k]) => Array.isArray(findings[k])).map(([k,v]) => [k, v.length]));
console.log(JSON.stringify({ ...findings, totals }, null, 2));
let failed = false;
for (const [key, value] of Object.entries(totals)) if (key !== 'related_sections' && value > 0) failed = true;
if (findings.related_sections.some(x => x.sections.length !== 0)) failed = true;
process.exitCode = failed ? 1 : 0;
