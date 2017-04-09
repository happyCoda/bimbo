let gulp = require('gulp'),
  util = require('gulp-util'),
  source = require('vinyl-source-stream'),
  browserify = require('browserify'),
  derequire = require('browserify-derequire'),
  eslintify = require('eslintify'),
  uglifyify = require('uglifyify'),
  babelify = require('babelify'),
  vueify = require('vueify'),
  watchify = require('watchify'),
  rimraf = require('rimraf'),
  config = require('../config');

function bundle(b, done) {
  let startBundle = Date.now();

  if (config.CLEAN) {
    rimraf.sync(`${config.BUILD_PATH_JS}/*`);
  }

  util.log('Bundling js...');
  b.bundle()
  .on('error', (err) => {
    util.log(util.colors.red(err));
  })
  .on('end', () => {
    if (util.env.type === 'development') {
      let finishBundle = Date.now();

      util.log(`${util.colors.green('bundle')} finished in ${util.colors.cyan((finishBundle - startBundle) + 'ms')}`);
    }

    if (done) {
      done();
    }
  })
  .pipe(source(config.BUILD_NAME_JS))
  .pipe(gulp.dest(config.BUILD_PATH_JS));
}

module.exports = (watch, done) => {
  let b = browserify({
      basedir: config.SRC_PATH_JS,
      entries: config.ENTRY_POINT_JS,
      cache: {},
      packageCache: {},
      standalone: 'Bimbo'
    })
    .plugin(derequire)
    .transform(eslintify)
    .transform(babelify)
    .transform(vueify),
    args = [b];

  if (watch) {
    b
    .plugin(watchify)
    .on('update', () => {
      bundle(b);
    });
  } else {
    process.env.NODE_ENV = 'production';
    b
    .transform(uglifyify, {
      global: true
    });
    args.push(done);
  }

  bundle(...args);
};
