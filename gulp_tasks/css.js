let gulp = require('gulp'),
  less = require('gulp-less'),
  util = require('gulp-util'),
  rename = require('gulp-rename'),
  path = require('path'),
  rimraf = require('rimraf'),
  config = require('../config');

module.exports = () => {
  let src = path.resolve(config.SRC_PATH_CSS, config.ENTRY_POINT_CSS),
    dest = config.BUILD_PATH_CSS,
    startBundle = Date.now();

  if (config.CLEAN) {
    rimraf.sync(`${dest}/*`);
  }

  return gulp.src(src)
    .pipe(less())
    .pipe(rename(config.BUILD_NAME_CSS))
    .pipe(gulp.dest(dest))
    .on('end', () => {
      if (util.env.type === 'development') {
        let finishBundle = Date.now();
        util.log(`${util.colors.green('css')} finished in ${util.colors.cyan((finishBundle - startBundle) + 'ms')}`);
      }
    });;
};
