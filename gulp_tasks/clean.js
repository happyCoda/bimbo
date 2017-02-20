let gulp = require('gulp'),
  util = require('gulp-util'),
  clean = require('gulp-clean'),
  config = require('../config');

module.exports = () => {
  let start = Date.now();

  return gulp.src(`${config.PUBLIC_PATH}/css/dest/*`, {
    read: false
  })
  .pipe(clean())
  .on('end', () => {
    util.log(`${util.colors.green('Clean')} finished in ${Date.now() - start} ms`);
  });
};
