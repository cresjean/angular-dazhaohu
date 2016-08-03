var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var rename = require('gulp-rename');

gulp.task('build', function (cb) {
  pump([
        gulp.src('src/*.js'),
        uglify(),
        rename('angular-dazhaohu.min.js'),
        gulp.dest('dist')
    ],
    cb
  );
});
