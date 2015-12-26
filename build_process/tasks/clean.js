'use strict';
/* Configuration Parameters */
var config = require('../../Gulpconfig');

/* Modules*/
var gulp = require('gulp');
var rimraf = require('gulp-rimraf');

/* Task */
gulp.task('clean', function () {
  return gulp.src(config.buildDir, { read: false })
    .pipe(rimraf({ force: true }));
});