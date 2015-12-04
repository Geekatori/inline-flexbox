var gulp         = require('gulp');
var postcss      = require('gulp-postcss');
var precss       = require('precss');
var autoprefixer = require('gulp-autoprefixer');
var cssnext      = require('gulp-cssnext');
var minifycss    = require('gulp-minify-css');

gulp.task('css', function () {
    return gulp.src('./src/*.css')
        .pipe(autoprefixer())
        .pipe(postcss([precss]))
        .pipe(cssnext())
        .pipe(minifycss())
        .pipe(gulp.dest('./dist'));
});