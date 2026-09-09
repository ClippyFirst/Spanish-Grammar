const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const root = 'f:/GitHub/Grammars/Spanish Grammar';
process.chdir(root);

process.env.PUBLIC_BASE = '/spanish-grammar';
process.env.SITE_URL = 'https://clippyfirst.github.io/spanish-grammar';
process.env.PATH = 'C:\\Program Files\\nodejs;' + process.env.PATH;

const logPath = path.join(root, 'build_cjs.log');
const log = fs.createWriteStream(logPath, { flags: 'w' });
function w(line) {
  log.write(line + '\n');
  process.stdout.write(line + '\n');
}

w(`started ${new Date().toISOString()}`);
log.write(`cwd=${process.cwd()}\n`);
log.write(`node=${process.version}\n`);

const child = spawn('npm', ['run', 'build'], {
  stdio: ['ignore', 'pipe', 'pipe'],
  shell: false,
  env: process.env,
});

let stdout = '';
let stderr = '';
child.stdout.on('data', (d) => { stdout += d; w(d.toString()); });
child.stderr.on('data', (d) => { stderr += d; w('[ERR] ' + d.toString()); });
child.on('close', (code) => {
  w(`EXIT_CODE=${code}`);
  w(`stdout_len=${stdout.length} stderr_len=${stderr.length}`);
  log.end();
  process.exit(code ?? 1);
});
child.on('error', (e) => {
  w(`SPAWN_ERROR:${e.message}`);
  process.exit(2);
});

// safety: kill if hangs > 120s
setTimeout(() => {
  if (child && !child.killed) {
    w('TIMEOUT_KILL');
    child.kill('SIGKILL');
  }
}, 120000);
