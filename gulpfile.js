const gulp = require('gulp'),
cssnano = require('gulp-cssnano'),
sass = require('gulp-sass'),
sassLint = require('gulp-sass-lint'),
rename = require('gulp-rename'),
runSequence = require('run-sequence'),
source = ['src/scss/**/*.scss'],
dest = 'src/assets/css'

gulp.task('lint', () => gulp.src(source)
  .pipe(sassLint({
    configFile: './.scss-lint.yml'
  }))
  .pipe(sassLint.format())
  .pipe(sassLint.failOnError())
);

gulp.task('build', () => {
let build = gulp.src(source)
  .pipe(sass())
  .pipe(cssnano({
    autoprefixer: {browsers: 'last 2 versions', add: true},
    zindex: false
  }))
  .pipe(rename(function (path) {
    path.extname = '.min.css'
  }))
  .pipe(gulp.dest(dest));

return build;
});

gulp.task('default', done => runSequence('lint', 'build', done));
