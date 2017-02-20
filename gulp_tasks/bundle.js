let gulp = require('gulp'),
  util = require('gulp-util'),
  rename = require('gulp-rename'),
  source = require('vinyl-source-stream'),
  browserify = require('browserify'),
  eslintify = require('eslintify'),
  uglifyify = require('uglifyify'),
  babelify = require('babelify'),
  watchify = require('watchify'),
  config = require('../config');

const PUBLIC_PATH = config.PUBLIC_PATH;
const BUILD_PATH = `${PUBLIC_PATH}/js/dest`;

function bundle(b, done) {
  let startBundle = Date.now();

  util.log('Bundling js...');
  b.bundle()
  .on('error', (err) => {
    util.log(util.colors.red(err));
  })
  .on('end', () => {
    let finishBundle = Date.now();

    util.log(`JS bundle finished in ${util.colors.green((finishBundle - startBundle) + ' ms')}`);

    if (done) {
      done();
    }
  })
  .pipe(source('app.js'))
  .pipe(rename('bundle.js'))
  .pipe(gulp.dest(BUILD_PATH));
}

module.exports = (watch, done) => {
  let b = browserify({
      basedir: PUBLIC_PATH,
      entries: 'js/src/app.js',
      cache: {},
      packageCache: {}
    })
    .transform(eslintify)
    .transform(babelify, {
      presets: ['es2015'],
      plugins: [
        'transform-runtime',
        'transform-regenerator'
      ]
    }),
    args = [b];

  if (watch) {
    b
    .plugin(watchify)
    .on('update', () => {
      bundle(b);
    });
  } else {
    b
    .transform(uglifyify, {
      global: true
    });
    args.push(done);
  }

  bundle(...args);
};
