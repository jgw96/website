const gulp = require('gulp'),
cssnano = require('gulp-cssnano'),
sass = require('gulp-sass'),
sassLint = require('gulp-sass-lint'),
rename = require('gulp-rename'),
runSequence = require('run-sequence'),
source = ['src/scss/**/*.scss'],
dest = 'src/assets/css'

gulp.task('default', () => gulp.src(source)
// Lint
.pipe(sassLint({
  configFile: './.scss-lint.yml'
}))
.pipe(sassLint.format())
.pipe(sassLint.failOnError())
// Compile
.pipe(sass())
// Optimise
.pipe(cssnano({
  autoprefixer: {browsers: 'last 2 versions', add: true},
  zindex: false
}))
// Distribute
.pipe(rename(function (path) {
  path.extname = '.min.css'
}))
.pipe(gulp.dest(dest)));
