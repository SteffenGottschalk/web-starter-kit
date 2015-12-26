'use strict';
/* Configuration Parameters */
var config = require('../../Gulpconfig');

/* Modules*/
var gulp = require('gulp');

/* Task */
gulp.task('fonts', function () {
  return gulp.src(config.fonts.src)
    .pipe(gulp.dest(config.fonts.dest));
});