const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();

// Html Task
gulp.task('htmlmin', function () {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build'))
        .pipe(browserSync.stream());
});

// Sass Task
gulp.task('sass', function () {
    return gulp.src('src/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.stream());
});

// Image Optimization Task
gulp.task('image', function () {
    return gulp.src('src/images/*')
        .pipe(gulp.dest('build/images'))
});

// BrowserSync Task
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: './build'
        }
    });

    gulp.watch('src/**/*.html', gulp.series('htmlmin')).on('change', browserSync.reload);
    gulp.watch('src/styles/*.scss', gulp.series('sass')).on('change', browserSync.reload);
    gulp.watch('src/images/*', gulp.series('image')).on('change', browserSync.reload);
});

// Default Task
gulp.task('default', gulp.series('htmlmin', 'sass', 'image', 'serve'));