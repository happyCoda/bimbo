# bimbo
A generic VueJS project skeleton based on Gulp, Browserify, Eslint, Karma, Jasmine, Browsersync and Less.

## Installation
Library can be installed via downloading a git repo:

```shell
git clone https://github.com/happyCoda/bimbo.git
```

## Usage
First, install all npm dependencies:

```
npm i
```

Then you can run different commands, depends on what you are up to do:

```
// run dev server on port 3000 and start develop your application
gulp dev

// create production build
gulp bundle

// run your tests
gulp test
```

Also you can setup clean builds for your JS and CSS. By default, when bundling occurs bundle content gets written to the existing bundle file. You can change this behavior by set `CLEAN` option to true in `config.js` file.

## License
[MIT](http://opensource.org/licenses/MIT)  
Copyright (c) 2017, happyCoda
