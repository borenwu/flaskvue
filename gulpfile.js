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


gulp.task('watchvue',function(){
    livereload.listen('http://http://127.0.0.1:5000/')
    gulp.watch(['app/static/js/src/*/*.*','app/templates/index.html'], ['vue']);
})

gulp.task('default', ['watchvue']);

