let gulp = require('gulp'),
  less = require('gulp-less'),
  util = require('gulp-util'),
  rename = require('gulp-rename'),
  path = require('path'),
  config = require('../config');

module.exports = () => {
  let src = path.resolve(`${config.PUBLIC_PATH}/css/src/style.less`),
    dest = `${config.PUBLIC_PATH}/css/dest/`,
    startBundle = Date.now();

  return gulp.src(src)
    .pipe(less())
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest(dest))
    .on('end', () => {
      let finishBundle = Date.now();
      util.log(`${util.colors.green('CSS')} task finished in ${finishBundle - startBundle} ms`);
    });
};
