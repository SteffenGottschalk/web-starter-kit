'use strict';
/* Configuration Parameters */
var config = require('../../Gulpconfig');

/* Modules*/
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

/* Tasks */
gulp.task('scripts:minify', function() {
    return gulp.src(config.scripts.src)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat(config.scripts.minifyConcat))
        .pipe(uglify({ mangle: false }))
        .pipe(gulp.dest(config.scripts.dest));
});

gulp.task('scripts', function() {
    return gulp.src(config.scripts.src)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat(config.scripts.concat))
        .pipe(gulp.dest(config.scripts.dest));
});