let gulp = require('gulp'),
  sync = require('./sync'),
  bundle = require('./bundle'),
  css = require('./css'),
  config = require('../config');

const PUBLIC_PATH = config.PUBLIC_PATH;

module.exports = () => {
  let server = sync();

  bundle(true);
  gulp.watch([`${PUBLIC_PATH}/css/src/**/*.less`], css);
  gulp.watch([
    `${PUBLIC_PATH}/js/dest/*.js`,
    `${PUBLIC_PATH}/css/dest/*.css`,
    `${PUBLIC_PATH}/index.html`
  ]).on('change', server.reload);
};
