const gulp = require('gulp');
const babel = require('gulp-babel');
const uglyfly = require('gulp-uglyfly');

gulp.task('transpilajs', () =>
    gulp.src('src/js/*.js') //directorio origen
        .pipe(babel({
            presets: ['@babel/env'] //proceso de transpilacion
        }))
        .pipe(uglyfly())
        .pipe(gulp.dest('dist')) //destino
);