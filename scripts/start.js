const { spawn } = require('node:child_process');

// Start the backend
const backend = spawn('yarn', ['workspace', 'backend', 'cluster:start']);
const frontend = spawn('yarn', ['workspace', 'frontend', 'start']);

// Forward output to console
backend.stdout.pipe(process.stdout);
backend.stderr.pipe(process.stderr);
frontend.stdout.pipe(process.stdout);
frontend.stderr.pipe(process.stderr);

// Listen for SIGINT
process.on('SIGINT', async () => {
  console.log('Stopping backend...');
  spawn('yarn', ['workspace', 'backend', 'cluster:stop']).on('close', process.exit);
});
