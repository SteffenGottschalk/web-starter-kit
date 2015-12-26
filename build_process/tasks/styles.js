'use strict';
/* Configuration Parameters */
var config = require('../../Gulpconfig');

/* Modules*/
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');

/* Tasks */
gulp.task('styles:minify', function () {
    return gulp.src(config.styles.src)
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
        .pipe(concat(config.styles.minifyConcat))
        .pipe(gulp.dest(config.styles.dest));
});

gulp.task('styles', function () {
  return gulp.src(config.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: config.scripts.dest }).on('error', sass.logError))
    .pipe(concat(config.styles.concat))
    .pipe(sourcemaps.write(config.styles.sourcemaps))
    .pipe(gulp.dest(config.styles.dest));
});