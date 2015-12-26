'use strict';
/* Configuration Parameters */
var config = require('../../gulpconfig.js');
var configPackage = require('../../package.json');

/* Modules*/
var gulp = require('gulp');
var colors = require('colors');

var newLine = '\n ';
var spacer = colors.grey('\n*******************************************************************\n ');
/* Task */
gulp.task('startNotifyUser:ProjectNotes', function() {
    console.log( spacer + 
        colors.green(
            'Project:  \t' + configPackage.name + '\t\t\t ver.' + configPackage.version + newLine +
            'Author:  \t' + configPackage.author + newLine +
            'Description:  \t' + configPackage.description ) +
        spacer
    );
});

gulp.task('startNotifyUser:ServerNotes', function() {
    console.log(
       spacer + 
        colors.green(
            'Expresserver wurde erfolgreich gestartet' + newLine +
            'Port:  \t' + config.browserPort) +
      spacer 
    );
});