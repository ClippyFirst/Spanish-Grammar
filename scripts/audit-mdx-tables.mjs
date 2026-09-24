import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const CONTENT_DIRS = [path.join(ROOT, 'src', 'content', 'es'), path.join(ROOT, 'src', 'content', 'comparisons')];

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file, out);
    else if (entry.name.endsWith('.mdx')) out.push(file);
  }
  return out;
}
function rel(file) { return path.relative(ROOT, file).replace(/\\\\/g, '/'); }

function splitCells(line) {
  let source = line.trim();
  if (source.startsWith('|')) source = source.slice(1);
  if (source.endsWith('|') && !source.endsWith('\\|')) source = source.slice(0, -1);
  const cells = []; let cell = ''; let escaped = false; let inCode = false;
  for (const char of source) {
    if (escaped) { cell += char; escaped = false; continue; }
    if (char === '\\') { cell += char; escaped = true; continue; }
    if (char === '`') { inCode = !inCode; cell += char; continue; }
    if (char === '|' && !inCode) { cells.push(cell.trim()); cell = ''; } else cell += char;
  }
  cells.push(cell.trim()); return cells;
}
function isSeparator(line) { return splitCells(line).every((cell) => /^:?-{3,}:?$/.test(cell)); }

const files = CONTENT_DIRS.flatMap((dir) => walk(dir)).sort();
const failures = []; let tableCount = 0;
for (const file of files) {
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/); let inFence = false;
  for (let i = 0; i < lines.length - 1; i += 1) {
    const trimmed = lines[i].trim();
    if (/^\s*```/.test(trimmed)) { inFence = !inFence; continue; }
    if (inFence || !lines[i].includes('|') || !isSeparator(lines[i + 1])) continue;
    const headerCount = splitCells(lines[i]).length; const separatorCount = splitCells(lines[i + 1]).length; tableCount += 1;
    if (headerCount !== separatorCount) { failures.push({file:rel(file),line:i+1,kind:'header/separator',expected:headerCount,actual:separatorCount,text:lines[i+1].trim()}); continue; }
    for (let row = i + 2; row < lines.length; row += 1) {
      const current = lines[row].trim();
      if (!current || !current.includes('|') || /^\s*```/.test(current)) break;
      const count = splitCells(lines[row]).length;
      if (count !== headerCount) failures.push({file:rel(file),line:row+1,kind:'body',expected:headerCount,actual:count,text:current});
    }
  }
}
console.log('MDX table audit: ' + files.length + ' files scanned');
console.log('Tables checked: ' + tableCount);
console.log('Column-count errors: ' + failures.length);
if (failures.length) {
  console.log('\nFAILURES');
  for (const f of failures) console.log('- ' + f.file + ':' + f.line + ' — ' + f.kind + ' row has ' + f.actual + ' columns; expected ' + f.expected + ' — ' + f.text);
  process.exitCode = 1;
} else console.log('OK: every detected Markdown table has consistent column counts.');
