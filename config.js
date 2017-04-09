const PUBLIC_PATH = `${__dirname}/public`,
  BUILD_PATH_JS = `${PUBLIC_PATH}/js/dest`,
  BUILD_NAME_JS = `bundle.js`,
  SRC_PATH_JS = `${PUBLIC_PATH}/js/src`,
  ENTRY_POINT_JS = `app.js`,
  BUILD_PATH_CSS = `${PUBLIC_PATH}/css/dest`,
  BUILD_NAME_CSS = `bundle.css`,
  SRC_PATH_CSS = `${PUBLIC_PATH}/css/src`,
  ENTRY_POINT_CSS = `style.less`;

let config = {
  PUBLIC_PATH,
  BUILD_PATH_JS,
  BUILD_NAME_JS,
  SRC_PATH_JS,
  ENTRY_POINT_JS,
  BUILD_PATH_CSS,
  BUILD_NAME_CSS,
  SRC_PATH_CSS,
  ENTRY_POINT_CSS,
  CLEAN: false
};

module.exports = config;
