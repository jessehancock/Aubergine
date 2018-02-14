
// REQUIRE DEPENDENCIES
// ============================================================
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
// DECLARE FILE PATHS
// ============================================================
var paths = {
  sassSource: ['./public/assets/css/**/*.sass', './public/assets/css/**/*.scss']
};
// DEFINE TASKS
// ============================================================
gulp.task('sass', function () {
  return gulp.src(paths.sassSource)
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./public'));
});

// WATCH TASKS
// ============================================================
gulp.task('watch', function() {
  gulp.watch(paths.sassSource, ['sass']);
});
// RUN DEFAULT TASK - first thing to run when gulp is called
// ============================================================
gulp.task('default', ['watch', 'sass']);
