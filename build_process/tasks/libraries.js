'use strict';
/* Configuration Parameters */
var config = require('../../Gulpconfig');

/* Modules*/
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

/* Tasks */
gulp.task('libraries:images', function () {
  return gulp.src(config.libraries.images.src)
    .pipe(rename({ dirname: '' }))
    .pipe(gulp.dest(config.libraries.images.dest));
});

gulp.task('libraries:fonts', function () {
  return gulp.src(config.libraries.fonts.src)
    .pipe(rename({ dirname: '' }))
    .pipe(gulp.dest(config.libraries.fonts.dest));
});

gulp.task('libraries:styles', function () {
  return gulp.src(config.libraries.styles.src)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sass({ outputStyle: config.libraries.scripts.dest }).on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
    .pipe(concat(config.libraries.styles.minifyConcat))
    .pipe(gulp.dest(config.libraries.styles.dest));
});

gulp.task('libraries:scripts', function () {
  return gulp.src(config.libraries.scripts.src)
    .pipe(concat(config.libraries.scripts.minifyConcat))
    .pipe(uglify({ mangle: false }))
    .pipe(gulp.dest(config.libraries.scripts.dest));
});

gulp.task('libraries', function () {
  gulp.start('libraries:images');
  gulp.start('libraries:fonts');
  gulp.start('libraries:styles');
  gulp.start('libraries:scripts');
});