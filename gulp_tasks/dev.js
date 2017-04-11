let gulp = require('gulp'),
  util = require('gulp-util'),
  watch = require('gulp-watch'),
  sync = require('./sync'),
  bundle = require('./bundle'),
  css = require('./css'),
  config = require('../config');

module.exports = () => {
  let server = sync(),
    watcher;

  util.env.type = 'development';

  bundle(true);
  watch([`${config.SRC_PATH_CSS}/**/*.less`], css);
  watcher = watch([
    `${config.BUILD_PATH_JS}/*.js`,
    `${config.BUILD_PATH_CSS}/*.css`,
    `${config.PUBLIC_PATH}/index.html`
  ])
  .on('change', server.reload);

  if (config.CLEAN) {
    watcher.on('add', server.reload);
  }
};
