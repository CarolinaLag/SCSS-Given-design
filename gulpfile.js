var gulp = require("gulp");
var sass = require("gulp-sass");
var rename = require('gulp-rename');
var csso = require("gulp-csso");

gulp.task("scss-items", function () {
  return gulp
    .src("scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("css"))
    .pipe(rename({suffix: '.min'}))
    .pipe(csso())
    .pipe(gulp.dest("dist/css"));
});

gulp.task("watch-scss", function() {
  gulp.watch("scss/*.scss", gulp.series("scss-items"));
});

gulp.task("default", gulp.series("scss-items", "watch-scss"), function() {

});
