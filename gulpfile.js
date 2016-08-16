var gulp = require('gulp');
var fontmin = require('gulp-fontmin');

gulp.task('default', function () {
    return gulp.src('src/fonts/*.ttf')
        .pipe(fontmin({
            text: ' AHPSaeorsy“”不世个为么也人什他以们会但你信假做别又可后呢在坛多她好如子它定就己希式微志怎懂成我方是有望杂来果样永然界的相看能自表被解论设评读达远都里长面，／：？',
        }))
        .pipe(gulp.dest('dist/fonts'));
});