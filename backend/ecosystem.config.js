module.exports = {
  apps : [{
    name: 'Demo App',
    script: './dist/main.js',
    exec_mode: 'cluster',
    instances: 'max',
  }]
}
