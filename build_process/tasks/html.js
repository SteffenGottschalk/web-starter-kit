'use strict';
/* Configuration Parameters */
var config = require('../../Gulpconfig');

/* Modules*/
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var fileinclude = require('gulp-file-include');
var preprocess = require('gulp-preprocess');
var htmlmin = require('gulp-htmlmin');
var rimraf = require('gulp-rimraf');

/* Task */
gulp.task('clean:htmlgroups', function () {
  return gulp.src(config.html.viewpath, { read: false })
    .pipe(rimraf({ force: true }));
});

gulp.task('html:minify', function () {
	return gulp.src(config.html.src)
		.pipe(plumber())
		.pipe(fileinclude({
			prefix: '@@',
			basepath: config.html.basepath
		}))
		.pipe(preprocess({ context: { ENVIRONMENT: 'production' } }))
		.pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
		.pipe(gulp.dest(config.html.dest));
});

gulp.task('html', function () {
	return gulp.src(config.html.src)
		.pipe(plumber())
		.pipe(fileinclude({
			prefix: '@@',
			basepath: config.html.basepath
		}))
		.pipe(preprocess({ context: { ENVIRONMENT: config.enviroment } }))
		.pipe(gulp.dest(config.html.dest));
});