let gulp = require('gulp'),
  config = require('../config');

module.exports = () => {
  let src = `${config.PUBLIC_PATH}/css/src/style.less`;

  gulp.watch([src], ['clean', 'css']);
};
