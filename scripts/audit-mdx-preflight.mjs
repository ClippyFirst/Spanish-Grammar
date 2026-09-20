import fs from 'node:fs';
import path from 'node:path';
import { compile } from '@mdx-js/mdx';

const ROOT = process.cwd();
const CONTENT = path.join(ROOT, 'src', 'content', 'es');

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file, out);
    else if (entry.name.endsWith('.mdx')) out.push(file);
  }
  return out;
}

function rel(file) {
  return path.relative(ROOT, file).replace(/\\/g, '/');
}

function locationOf(error) {
  const line = error?.line ?? error?.position?.start?.line;
  const column = error?.column ?? error?.position?.start?.column;
  if (!line) return '';
  return ':' + line + (column ? ':' + column : '');
}

const files = walk(CONTENT).sort();
const failures = [];

for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  try {
    await compile({ value: source, path: file });
  } catch (error) {
    failures.push({ file: rel(file), location: locationOf(error), message: error?.reason || error?.message || String(error) });
  }
}

console.log('MDX preflight: ' + files.length + ' files scanned');
console.log('Syntax errors: ' + failures.length);

if (failures.length) {
  console.log('');
  console.log('FAILURES');
  for (const failure of failures) {
    console.log('- ' + failure.file + failure.location + ' — ' + failure.message.replace(/\\s+/g, ' ').trim());
  }
  process.exitCode = 1;
} else {
  console.log('OK: all MDX files compile successfully.');
}
