const gulp = require('gulp')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const ejs = require('gulp-ejs')
const rimraf = require('rimraf')

gulp.task('ejs', cb => {
  return gulp
    .src(['./src/ejs/**/*.ejs'])
    .pipe(ejs())
    .pipe(rename({ extname: '' }))
    .pipe(gulp.dest('./dist'))
})

gulp.task('sass', cb => {
  return gulp
    .src('./src/scss/**/*.scss')
    .pipe(
      sass({
        outputStyle: 'compressed'
      }).on('error', sass.logError)
    )
    .pipe(gulp.dest('./dist/assets/css'))
})

gulp.task('clean', function(cb) {
  return rimraf('./dist', cb)
})

gulp.task('build', gulp.series('clean', 'ejs', 'sass'))

