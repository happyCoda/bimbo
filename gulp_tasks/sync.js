let gulp = require('gulp'),
  browsersync = require('browser-sync'),
  config = require('../config');

const PUBLIC_PATH = config.PUBLIC_PATH;

module.exports = () => {
  let server = browsersync.create();

  server.init({
    port: 3000,
    server: {
      baseDir: PUBLIC_PATH,
      index: 'index.html'
    },
    open: false
  });

  return server;
};
