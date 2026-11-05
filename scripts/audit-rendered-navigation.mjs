// Verify that category/slug references resolve into actual rendered navigation links.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist');
const BASE = (process.env.PUBLIC_BASE || '/').replace(/\/$/, '');

const checks = [
  {
    file: 'es/verbs/ser-estar-hay/index.html',
    expected: [
      BASE + '/es/verbs/ser-estar/',
      BASE + '/es/sentence-structure/hay-vs-estar/',
    ],
    description: 'related references with category/slug and unique basename',
  },
  {
    file: 'es/sentence-structure/personal-a/index.html',
    expected: [BASE + '/es/pronouns/personal-a/'],
    description: 'canonical_topic navigation',
  },
  {
    file: 'es/sentence-structure/hay-vs-estar/index.html',
    expected: [BASE + '/es/verbs/ser-estar-hay/'],
    description: 'canonical_topic navigation for a focused grammar page',
  },
];

let failures = 0;
for (const check of checks) {
  const file = path.join(DIST, check.file);
  if (!fs.existsSync(file)) {
    console.error('FAIL missing rendered page: ' + check.file);
    failures++;
    continue;
  }
  const html = fs.readFileSync(file, 'utf8');
  for (const href of check.expected) {
    if (!html.includes('href="' + href + '"')) {
      console.error('FAIL ' + check.description + ': missing href="' + href + '" in ' + check.file);
      failures++;
    }
  }
  if (check.file.startsWith('es/')) console.log('CHECK ' + check.file + ' — ' + check.description);
}

const comparison = path.join(DIST, 'comparisons', 'ser-estar', 'index.html');
const staleComparison = path.join(DIST, 'comparisons', 'ser-estar.mdx', 'index.html');
if (!fs.existsSync(comparison)) {
  console.error('FAIL missing extensionless comparison route: comparisons/ser-estar/index.html');
  failures++;
}
if (fs.existsSync(staleComparison)) {
  console.error('FAIL stale source-extension route exists: comparisons/ser-estar.mdx/index.html');
  failures++;
}
if (!failures) console.log('Rendered navigation audit: all checks passed.');
process.exitCode = failures ? 1 : 0;
