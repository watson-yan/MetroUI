'user strict'

var gulp = require('gulp')
    sass = require("gulp-sass")
    // livereload = require("gulp-livereload")

gulp.task('sass', function() {
  return gulp.src('./src/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
})

gulp.task('sass:watch', function () {
  gulp.watch('./src/*.scss', ['sass']);
})

gulp.task('default', ['sass', 'sass:watch'])