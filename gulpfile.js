const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Sass Task
gulp.task('sass', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/css'))
});

// Watch Task
gulp.task('watch', function () {
    gulp.watch('src/scss/*.scss', gulp.series('sass'));
});

// Default Task
gulp.task('default', gulp.series('sass', 'watch'));