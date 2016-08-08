var gulp = require('gulp')
var browserify = require('gulp-browserify')
var livereload = require('gulp-livereload')
var connect = require('gulp-connect')

gulp.task("vue", function() {
    return gulp.src('app/static/js/src/main.js')
        .pipe(browserify({
            transform: 'vueify'
        }))
        .pipe(gulp.dest('app/static/js/build'))
        .pipe(livereload())
});

gulp.task("css",function(){
    return gulp.src('src/style.css')
        .pipe(gulp.dest('./dist'))
        .pipe(livereload())
})

gulp.task('watchcss',function(){
    livereload.listen()
    gulp.watch(['src/*/*.*','index.html'], ['vue']);
})

gulp.task('default', ['vue']);

