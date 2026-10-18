import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const CONTENT = path.join(ROOT, 'src', 'content', 'es');
const COMPARISONS = path.join(ROOT, 'src', 'content', 'comparisons');

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

const files = [...walk(CONTENT), ...walk(COMPARISONS)].sort();
const docs = files.map(file => {
  const text = fs.readFileSync(file, 'utf8');
  const parsed = frontmatter(text);
  const rel = file.startsWith(COMPARISONS + path.sep)
    ? 'comparisons/' + path.relative(COMPARISONS, file).replaceAll(path.sep, '/').replace(/\.mdx$/, '')
    : path.relative(CONTENT, file).replaceAll(path.sep, '/').replace(/\.mdx$/, '');
  return { file, rel, text, body: text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, ''), ...parsed };
});

const findings = {
  generated: new Date().toISOString(),
  pages: docs.length,
  grammar_pages: docs.filter(d => !d.rel.startsWith('comparisons/')).length,
  comparison_pages: docs.filter(d => d.rel.startsWith('comparisons/')).length,
  duplicate_topic_codes: [],
  forbidden_ukrainomov: [],
  emphasis_artifacts: [],
  table_mismatches: [],
  related_sections: [],
  duplicate_related_targets: [],
};

const ordered = [...docs].sort((a, b) => {
  const categoryOrder = (x) => Number(x.data.categoryOrder ?? 999);
  const categoryA = a.data.category || a.rel.split('/')[0];
  const categoryB = b.data.category || b.rel.split('/')[0];
  if (categoryA !== categoryB) return categoryA.localeCompare(categoryB);
  const orderDelta = Number(a.data.order ?? 100) - Number(b.data.order ?? 100);
  if (orderDelta !== 0) return orderDelta;
  return a.rel.localeCompare(b.rel);
});
const codeMap = new Map();
const categoryIndexes = new Map();
for (const d of ordered) {
  const category = d.data.category || d.rel.split('/')[0];
  const index = (categoryIndexes.get(category) ?? 0) + 1;
  categoryIndexes.set(category, index);
  const code = String(index);
  const bucket = codeMap.get(category + ':' + code) ?? [];
  bucket.push(d.rel);
  codeMap.set(category + ':' + code, bucket);
}
for (const [key, bucket] of codeMap) {
  if (bucket.length > 1) findings.duplicate_topic_codes.push({ key, pages: bucket });
}

const forbidden = /україномов/giu;
for (const d of docs) {
  const hits = [...d.body.matchAll(forbidden)].map(m => m[0]);
  if (hits.length) findings.forbidden_ukrainomov.push({ page: d.rel, hits: [...new Set(hits)] });
}

function findEmphasisArtifacts(body) {
  const withoutFences = body.replace(/\x60\x60\x60[\s\S]*?\x60\x60\x60/g, block => block.replace(/[^\n]/g, ' '));
  const lines = withoutFences.split(/\r?\n/);
  const findings = [];
  let blockLines = [];
  let blockStart = 1;

  function flushBlock() {
    if (!blockLines.length) return;
    const raw = blockLines.join('\n').replace(/`[^`\n]*`/g, '');
    const tokens = [...raw.matchAll(/\*+/g)];
    const stack = [];
    for (const token of tokens) {
      const run = token[0];
      const index = token.index ?? 0;
      const before = raw.slice(0, index);
      const linePrefix = before.slice(before.lastIndexOf('\n') + 1);
      const after = raw.slice(index + run.length).split('\n')[0];
      const line = blockStart + before.split('\n').length - 1;

      // A leading "* item" is a Markdown list marker, not emphasis.
      if (run.length === 1 && /^\s*$/.test(linePrefix) && /^\s/.test(after)) continue;

      if (run.length === 1) {
        if (stack[stack.length - 1] === 'italic') stack.pop();
        else stack.push('italic');
      } else if (run.length === 2) {
        if (stack[stack.length - 1] === 'bold') stack.pop();
        else stack.push('bold');
      } else if (run.length === 3) {
        const n = stack.length;
        const nestedPair = n >= 2 &&
          ((stack[n - 2] === 'italic' && stack[n - 1] === 'bold') ||
           (stack[n - 2] === 'bold' && stack[n - 1] === 'italic'));
        if (nestedPair) {
          stack.pop();
          stack.pop();
        } else if (stack.length === 0) {
          stack.push('italic', 'bold');
        } else {
          findings.push({ match: run, line, reason: 'mismatched emphasis delimiter' });
        }
      } else {
        findings.push({ match: run, line, reason: 'unsupported asterisk run' });
      }
    }
    if (stack.length) {
      findings.push({
        match: 'unclosed ' + stack.join('+'),
        line: blockStart + blockLines.length - 1,
        reason: 'unclosed emphasis'
      });
    }
    blockLines = [];
  }

  for (let i = 0; i < lines.length; i++) {
    if (/^\s*$/.test(lines[i]) || /^\s*\*{3}\s*$/.test(lines[i]) || /^\s*---+\s*$/.test(lines[i])) {
      flushBlock();
      blockStart = i + 2;
    } else {
      blockLines.push(lines[i]);
    }
  }
  flushBlock();
  return findings;
}

for (const d of docs) {
  const hits = findEmphasisArtifacts(d.body);
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
    const sectionLinks = sections.flatMap(section => section.links);
    const frontmatterLinks = (d.lists.related ?? []).map(target => '/es/' + (target.includes('/') ? target : '') + '/');
    const unresolvedComparison = sectionLinks.length !== (d.lists.related ?? []).length;
    if (unresolvedComparison) findings.related_sections.push({ page: d.rel, sections, frontmatter_count: (d.lists.related ?? []).length });
    else findings.related_sections.push({ page: d.rel, sections, frontmatter_count: (d.lists.related ?? []).length });
  }
  const related = d.lists.related ?? [];
  const seen = new Set();
  const dup = related.filter(x => seen.has(x) ? true : (seen.add(x), false));
  if (dup.length) findings.duplicate_related_targets.push({ page: d.rel, duplicates: [...new Set(dup)] });
}

const totals = Object.fromEntries(Object.entries(findings).filter(([k]) => Array.isArray(findings[k])).map(([k,v]) => [k, v.length]));
console.log(JSON.stringify({ ...findings, totals }, null, 2));
let failed = false;
for (const [, value] of Object.entries(totals)) if (value > 0) failed = true;
if (findings.related_sections.some(x => x.sections.length !== 0)) failed = true;
process.exitCode = failed ? 1 : 0;
