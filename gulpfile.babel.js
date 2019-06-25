const gulp = require('gulp');
const babel = require('gulp-babel');
var uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var cssnano = require('cssnano');
var autoprefixer = require('autoprefixer');
const { parallel } = require('gulp');

gulp.task('transpilajs', () =>
    gulp.src('src/js/*.js') //directorio origen
        .pipe(babel({
            presets: ['@babel/env'] //proceso de transpilacion
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js')) //destino
);

gulp.task('minificahtml', () => {
    return gulp.src('src/html/*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('dist/html'));
  });

  gulp.task('minificascss', function () {
    var plugins = [
        autoprefixer({browsers: ['last 1 version']}),
        cssnano()
    ];
    return gulp.src('src/scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss(plugins))
      .pipe(gulp.dest('dist/scss'));
  });

  gulp.task('build', gulp.parallel("transpilajs", "minificascss", "minificahtml"));
  