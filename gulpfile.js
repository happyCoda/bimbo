let gulp = require('gulp'),
  util = require('gulp-util'),
  sequence = require('gulp-sequence'),
  config = require('./config'),
  bundle = require('./gulp_tasks/bundle'),
  css = require('./gulp_tasks/css'),
  dev = require('./gulp_tasks/dev'),
  test = require('./gulp_tasks/test');

gulp.task('bundle', (done) => {
  bundle(false, done);
});
gulp.task('css', css);
gulp.task('test', (done) => {
  test(done);
});
gulp.task('dev', dev);
gulp.task('build', sequence('test', 'bundle'));
