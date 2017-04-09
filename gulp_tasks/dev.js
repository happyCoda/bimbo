let gulp = require('gulp'),
  util = require('gulp-util'),
  sync = require('./sync'),
  bundle = require('./bundle'),
  css = require('./css'),
  config = require('../config');

module.exports = () => {
  let server = sync();

  util.env.type = 'development';

  bundle(true);
  gulp
  .watch([`${config.SRC_PATH_CSS}/**/*.less`], css);
  gulp
  .watch([
    `${config.BUILD_PATH_JS}/*.js`,
    `${config.BUILD_PATH_CSS}/*.css`,
    `${config.PUBLIC_PATH}/index.html`
  ])
  .on('change', server.reload);
};
