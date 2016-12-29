var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var ts = require('gulp-typescript');
var uglify = require('gulp-uglify');
var ccss = require('gulp-clean-css');
var nodemon = require('gulp-nodemon');
var nodeInspector = require('gulp-node-inspector');

var tsFiles = ['public/js/config.ts', 'public/components/**/*.ts'];
var lessFiles = ['public/css/global.less', 'public/**/style.less'];
var cssFile = 'public/css/style.css';
var jsFile = 'public/js/script.js';

gulp.task('default', ['compile-less', 'compile-ts', 'watch', 'serve']);
gulp.task('watch', ['watch-ts', 'watch-less']);
gulp.task('watch-ts', function () {
    gulp.watch([tsFiles], ['compile-ts']);
});
gulp.task('watch-less', function () {
    gulp.watch(lessFiles, ['compile-less']);
});
gulp.task('compile-ts', function () {
    return gulp.src(tsFiles)
        .pipe(
            ts({
                "target": "es5",
                "module": "commonjs",
                "sourceMap": true
            })
        )
        .pipe(concat('script.js'))
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest('public/js/'));

});
gulp.task('compile-less', function () {
    gulp.src(lessFiles)
        .pipe(less())
        .pipe(ccss({compatibility: 'ie8'}))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('public/css/'));
});
gulp.task('serve', function () {
    nodemon({
        script: './bin/www',
        nodeArgs: ['--debug'],
        // exec: 'node-inspector',
        ext: 'js html',
        ignore: ['public/*'],
        env: {'NODE_ENV': 'development'}
    });
    gulp.src([])
        .pipe(nodeInspector());
});