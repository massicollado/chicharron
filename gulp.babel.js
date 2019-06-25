const gulp = require('gulp');
const gulp = require('gulp-babel');

gulp.task('transpilajs', () =>
    gulp.src('src/app.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist'))
);