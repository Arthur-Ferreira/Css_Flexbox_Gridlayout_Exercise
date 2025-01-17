const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();

async function getImagemin() {
    const imagemin = await import('gulp-imagemin');
    return imagemin.default;
}

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
gulp.task('image', async function () {
    const imagemin = await getImagemin();
    return gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'))
        .pipe(browserSync.stream());
});

// BrowserSync Task
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: './build'
        }
    });

    gulp.watch('src/**/*.html', gulp.series('htmlmin')).on('change', browserSync.reload);
    gulp.watch('src/styles/*.scss', gulp.series('sass'));
    gulp.watch('src/images/*', gulp.series('image'));
});

// Default Task
gulp.task('default', gulp.series('htmlmin', 'sass', 'image', 'serve'));