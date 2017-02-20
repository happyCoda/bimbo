let gulp = require('gulp'),
  sequence = require('gulp-sequence'),
  config = require('./config'),
  bundle = require('./gulp_tasks/bundle'),
  clean = require('./gulp_tasks/clean'),
  css = require('./gulp_tasks/css'),
  sync = require('./gulp_tasks/sync'),
  test = require('./gulp_tasks/test');

const PUBLIC_PATH = config.PUBLIC_PATH;

gulp.task('bundle', (done) => {
  bundle(false, done);
});
gulp.task('clean', clean);
gulp.task('css', ['clean'], css);
gulp.task('test', (done) => {
  test(done);
});
gulp.task('dev', () => {
  let server = sync();

  bundle(true);
  gulp.watch([`${PUBLIC_PATH}/css/src/**/*.less`], ['css']);
  gulp.watch([
    `${PUBLIC_PATH}/js/dest/*.js`,
    `${PUBLIC_PATH}/css/dest/*.css`,
    `${PUBLIC_PATH}/index.html`
  ]).on('change', server.reload);
});
gulp.task('build', sequence('test', 'bundle'));
