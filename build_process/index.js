'use strict';
/* Configuration Parameters */
var config = require('../Gulpconfig');

/* Modules*/
var gulp = require('gulp');

/* Tasks */
var clean = require('./tasks/clean');
var fonts = require('./tasks/fonts');
var images = require('./tasks/images');
var html = require('./tasks/html');
var styles = require('./tasks/styles');
var scripts = require('./tasks/scripts');
var libraries = require('./tasks/libraries');
var startNotifyUser = require('./tasks/startNotifyUser');
var startExpressServer = require('./tasks/startExpressServer');

/* Main  Tasks */
gulp.task('build:productivEnvironment', ['clean'], function() {
    gulp.start('html:minify', 'fonts', 'images', 'scripts:minify', 'styles:minify', 'libraries');
    gulp.start('startNotifyUser:ProjectNotes');
});

gulp.task('build:liveDevelopment', ['clean'], function() {
    gulp.start('html', 'fonts', 'images', 'scripts', 'styles', 'libraries');
    gulp.start('clean:htmlgroups');
});

/* Short Code Tasks */
gulp.task('info', function() {
    gulp.start('startNotifyUser:ProjectNotes');
});

gulp.task('dev', ['build:liveDevelopment'], function() {
    gulp.start('startExpressServer');
});

gulp.task('prod', function() {
    gulp.start('build:productivEnvironment');
});

gulp.task('default', function() {
    gulp.start('build:liveDevelopment')
});