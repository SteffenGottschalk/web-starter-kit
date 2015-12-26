'use strict';
/* Configuration Parameters */
var config = require('../../Gulpconfig');
var configPackage = require('../../package.json');

/* Modules*/
var gulp = require('gulp');
var watch = require('gulp-watch');
var express = require('express');
var livereload = require('connect-livereload');
var tinylr = require('tiny-lr')();
var colors = require('colors');

/* Function */
function startExpress() {
    var app = express();
    app.use(livereload({ port: config.livereloadPort }));
    app.use(express.static(config.buildDir));
    app.listen(config.browserPort);
}

function startLiveReload() {
    var opts = {
        livereload: "livereload-js/dist/livereload.js"
    }
    tinylr.listen(35729);
};

function notifyLiveReload(event) {
    var fileName = require('path').relative(__dirname, event.path);

    tinylr.changed({
        body: {
            files: [fileName]
        }
    });
};

/* Task */
gulp.task('startExpressServer', function() {
    startExpress();
    startLiveReload();

    gulp.watch(config.buildDirContent, notifyLiveReload);
    gulp.watch(config.html.src, ['html']);
    gulp.watch(config.styles.src, ['styles']);
    gulp.watch(config.scripts.src, ['scripts']);
    gulp.watch(config.images.src, ['images']);
});