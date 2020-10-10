var gulp = require("gulp");
var sass = require("gulp-sass");
var csso = require("gulp-csso");

gulp.task("default", function () {
  return gulp
    .src("scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("css"))
    .pipe(csso())
    .pipe(gulp.dest("dist"));
  // .pipe(gulp.watch)
});
