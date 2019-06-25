const gulp = require('gulp');
const babel = require('gulp-babel');
var uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');

gulp.task('transpilajs', () =>
    gulp.src('src/js/*.js') //directorio origen
        .pipe(babel({
            presets: ['@babel/env'] //proceso de transpilacion
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist')) //destino
);

gulp.task('minificahtml', () => {
    return gulp.src('src/html/*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('dist'));
  });

  gulp.task('minificascss', function () {
    return gulp.src('src/scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('dist'));
  });