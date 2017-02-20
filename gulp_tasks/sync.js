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

  // gulp.watch([
  //   `${PUBLIC_PATH}/js/dest/*.js`,
  //   `${PUBLIC_PATH}/css/dest/*.css`,
  //   `${PUBLIC_PATH}/index.html`
  // ]).on('change', server.reload);

  return server;
};
