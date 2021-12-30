const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('autoprefixer', function (done) {
  gulp.src('css/style.css')
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest('dist/'))
});

gulp.task('default', gulp.series('autoprefixer'));