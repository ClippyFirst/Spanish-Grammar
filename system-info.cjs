// system-info.cjs — snapshot system state for build debugging
const fs = require('fs');
const path = require('path');
const os = require('os');

const root = 'f:/GitHub/Grammars/Spanish Grammar';
process.chdir(root);

const out = path.join(root, 'system-info.txt');
function w(line) {
  fs.appendFileSync(out, line + '\n');
  process.stdout.write(line + '\n');
}

w('=== SYSTEM SNAPSHOT ===');
w('timestamp: ' + new Date().toISOString());
w('cwd: ' + process.cwd());
w('platform: ' + process.platform);
w('node: ' + process.version);
w('arch: ' + process.arch);
w('env PATH includes node: ' + (process.env.PATH || '').toLowerCase().includes('node'));
w('env PUBLIC_BASE: ' + (process.env.PUBLIC_BASE || '(unset)'));
w('env SITE_URL: ' + (process.env.SITE_URL || '(unset)'));
w('');

w('=== PICKLIST (top-level) ===');
try {
  const items = fs.readdirSync(root);
  items.forEach(name => {
    const stats = fs.statSync(path.join(root, name));
    const kind = stats.isDirectory() ? 'dir' : stats.isFile() ? 'file' : 'other';
    w(`${kind}  ${name}`);
  });
} catch (e) {
  w('PICKLIST ERROR: ' + e.message);
}
w('');

w('=== WORKSPACE FILES (src tree) ===');
function walk(dir, depth) {
  if (!fs.existsSync(dir)) return;
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    entries.forEach(entry => {
      const rel = path.relative(root, path.join(dir, entry.name));
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        w(`D  ${rel}`);
        walk(p, depth + 1);
      } else if (entry.isFile()) {
        try {
          const stats = fs.statSync(p);
          w(`F  ${rel}  ${stats.size}B`);
        } catch (e) {
          w(`F  ${rel}  (stat error)`);
        }
      }
    });
  } catch (e) {
    w(`WALK SKIP ${dir}: ${e.message}`);
  }
}
walk('src', 0);
w('');

w('=== DIST (if present) ===');
if (fs.existsSync('dist')) {
  walk('dist', 0);
} else {
  w('dist/ not present');
}
w('');

w('=== FILE SEARCH: pagefind artifacts ===');
const searchPaths = ['dist', 'public'];
searchPaths.forEach(dir => {
  if (fs.existsSync(dir)) {
    const matches = [];
    walkFor(dir, matches);
    w(`search ${dir}: ${matches.length} entries`);
    matches.slice(0, 60).forEach(m => w('  ' + m));
  } else {
    w(`search ${dir}: dir missing`);
  }
});
function walkFor(dir, acc) {
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    entries.forEach(entry => {
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walkFor(p, acc);
      } else if (entry.isFile()) {
        acc.push(p);
      }
    });
  } catch (e) {}
}
w('');

w('=== CONFIG FILES ===');
const configFiles = [
  'astro.config.mjs',
  'package.json',
  'tsconfig.json',
  'src/content.config.ts',
  'src/utils/content.ts',
  'data/categories.ts',
];
configFiles.forEach(name => {
  const p = path.join(root, name);
  if (fs.existsSync(p)) {
    w(`FILE ${name}  ${fs.statSync(p).size}B`);
  } else {
    w(`FILE ${name}  MISSING`);
  }
});
w('');

w('=== LOCKFILE ===');
if (fs.existsSync('package-lock.json')) {
  w('package-lock.json present ' + fs.statSync('package-lock.json').size + 'B');
} else {
  w('package-lock.json MISSING');
}
w('');

w('=== NODE_MODULES ASTRO ===');
const astroDir = 'node_modules/astro';
if (fs.existsSync(astroDir)) {
  try {
    const pkg = JSON.parse(fs.readFileSync(path.join(astroDir, 'package.json'), 'utf8'));
    w('astro package: ' + JSON.stringify({ name: pkg.name, version: pkg.version }));
  } catch (e) {
    w('astro package.json parse error: ' + e.message);
  }
} else {
  w('node_modules/astro missing');
}
w('');

w('END');
process.exit(0);
