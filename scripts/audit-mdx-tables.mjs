import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const EXCLUDED_DIRS = new Set(['.git', '.astro', 'dist', 'node_modules']);

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file, out);
    else if (/\.(md|mdx)$/i.test(entry.name)) out.push(file);
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
function arrayStringCount(source) {
    const matches = source.match(/'(?:\\\\.|[^'])*'|\"(?:\\\\.|[^\"])*\"/gs);
  return matches ? matches.length : 0;
}

const files = walk(ROOT).filter((file) => { const parts = path.relative(ROOT, file).split(path.sep); return parts.every((part) => !EXCLUDED_DIRS.has(part)) && /\.(md|mdx)$/i.test(file); }).sort();
const failures = []; let markdownTables = 0; let compareTables = 0;

for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  const lines = source.split(/\r?\n/); let inFence = false;
  for (let i = 0; i < lines.length - 1; i += 1) {
    const trimmed = lines[i].trim();
    if (/^\s*```/.test(trimmed)) { inFence = !inFence; continue; }
    if (inFence || !lines[i].includes('|') || !isSeparator(lines[i + 1])) continue;
    const headerCount = splitCells(lines[i]).length; const separatorCount = splitCells(lines[i + 1]).length; markdownTables += 1;
    if (headerCount !== separatorCount) { failures.push({file:rel(file),line:i+1,kind:'markdown header/separator',expected:headerCount,actual:separatorCount,text:lines[i+1].trim()}); continue; }
    for (let row = i + 2; row < lines.length; row += 1) {
      const current = lines[row].trim();
      if (!current || !current.includes('|') || /^\s*```/.test(current)) break;
      const count = splitCells(lines[row]).length;
      if (count !== headerCount) failures.push({file:rel(file),line:row+1,kind:'markdown body',expected:headerCount,actual:count,text:current});
    }
  }

  let searchFrom = 0;
  while (true) {
    const start = source.indexOf('<CompareTable', searchFrom);
    if (start < 0) break;
    const end = source.indexOf('/>', start);
    if (end < 0) { failures.push({file:rel(file),line:source.slice(0,start).split(/\r?\n/).length,kind:'CompareTable syntax',expected:'closing />',actual:'missing',text:'<CompareTable'}); break; }
    const block = source.slice(start, end + 2);
    const headersMatch = block.match(/headers=\{\[([\s\S]*?)\]\}/);
    const rowsMatch = block.match(/rows=\{\[([\s\S]*?)\]\}/);
    if (headersMatch && rowsMatch) {
      compareTables += 1;
      const headers = arrayStringCount(headersMatch[1]);
      const rowBlocks = [...rowsMatch[1].matchAll(/\bcells:\s*\[([\s\S]*?)\]/g)];
      for (const row of rowBlocks) {
        const cells = arrayStringCount(row[1]);
        if (cells !== headers - 1) {
          const offset = start + block.indexOf(row[0]);
          failures.push({file:rel(file),line:source.slice(0,offset).split(/\r?\n/).length,kind:'CompareTable row',expected:headers-1,actual:cells,text:row[0].trim()});
        }
      }
    }
    searchFrom = end + 2;
  }
}

console.log('Markdown table audit: ' + files.length + ' files scanned');
console.log('Markdown tables checked: ' + markdownTables);
console.log('CompareTable components checked: ' + compareTables);
console.log('Column-count errors: ' + failures.length);
if (failures.length) {
  console.log('\nFAILURES');
  for (const f of failures) console.log('- ' + f.file + ':' + f.line + ' — ' + f.kind + ' has ' + f.actual + ' columns; expected ' + f.expected + ' — ' + f.text);
  process.exitCode = 1;
} else console.log('OK: every detected Markdown and CompareTable table has consistent column counts.');
