'use strict';
var config = {

    browserPort: 4000,
    livereloadPort: 35729,

    sourceDir: './source/',
    buildDir: './build/',
    buildDirContent: './build/**',

    enviroment: 'development',

    fonts: {
        src: './source/fonts/**/*.{ttf,woff,eot,svg}',
        dest: './build/fonts'
    },

    images: {
        src: './source/images/**/*.{jpeg,jpg,png,gif,svg,ico}',
        dest: './build/images'
    },

    html: {
        src: './source/html/**/*.html',
        dest: './build',        
        basepath: './source/htmlgroups',
        viewpath: './build/htmlgroups',
    },

    styles: {
        src: './source/styles/**/*.scss',
        dest: './build/styles',
        main: './source/styles/_main.scss',
        sourcemaps: './',
        concat: 'styles.css',
        minifyConcat: 'styles.min.css',
        /* :nested :compact :expanded :compressed */
        outputStyle: 'nested'
    },

    scripts: {
        src: './source/scripts/**/*.js',
        dest: './build/scripts',
        concat: 'scripts.js',
        minifyConcat: 'scripts.min.js'
    },

    libraries: {
        fonts: {
            src: './source/libraries/**/*.{ttf,woff,eot,svg}',
            dest: './build/fonts'
        },

        images: {
            src: './source/libraries/**/*.{jpeg,jpg,png,gif,svg,ico}',
            dest: './build/images'
        },

        styles: {
            src: './source/libraries/**/*.scss',
            dest: './build/styles',
            minifyConcat: 'libraries.min.css',
            outputStyle: 'nested'
        },

        scripts: {
            src: './source/libraries/**/*.js',
            dest: './build/scripts',
            minifyConcat: 'libraries.min.js'
        },
    }
};

module.exports = config;