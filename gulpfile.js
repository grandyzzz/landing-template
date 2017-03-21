'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync'); 

gulp.task('sass', function () {
    gulp.src('app/sass/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css/'))
        .pipe(browserSync.reload({ stream : true }));
});

// gulp.task('browser-sync', function () {
//     browserSync({
//         server : {
//             baseDir : 'app'
//         },
//         notify : false,
//         open: false
//     })
// });

gulp.task('watch', ['sass'], function () {
    gulp.watch('app/sass/*.sass', ['sass']);
});