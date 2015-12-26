'use strict';
/* Configuration Parameters */
var config = require('../../Gulpconfig');

/* Modules*/
var gulp = require('gulp');

/* Task */
gulp.task('images', function () {
  return gulp.src(config.images.src)
    .pipe(gulp.dest(config.images.dest));
});