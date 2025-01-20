const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const plumber = require('gulp-plumber');

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
        .pipe(gulp.dest('build/styles'))
        .pipe(browserSync.stream());
    });

    gulp.task('js', function () {
        return gulp.src('src/scripts/*.js')
            .pipe(plumber())
            .pipe(uglify())
            .pipe(gulp.dest('build/scripts'))
            .pipe(browserSync.stream());
    });
    
    // Image Optimization Task
    gulp.task('image', async function () {
        const imagemin = await import ('gulp-imagemin');
        return gulp.src('src/images/*', { encoding: false})
        .pipe(imagemin.default())
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
    gulp.watch('src/styles/*.scss', gulp.series('sass')).on('change', browserSync.reload);
    gulp.watch('src/scripts/*.js', gulp.series('js')).on('done', browserSync.reload);
    gulp.watch('src/images/*', gulp.series('image')).on('change', browserSync.reload);
});

// Default Task
gulp.task('default', gulp.series('htmlmin', 'sass', 'image', 'js','serve'));