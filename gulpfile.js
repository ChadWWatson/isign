var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');

var config = {
  less: './web/public/less/**/*.less',
  css: './web/public/css/'
}

gulp.task('less', function(){
  gulp.src('./web/public/less/isign.less')
    .pipe(less())
    .pipe(gulp.dest(config.css));
});

gulp.task('css', function() {
  gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.min.css', config.css + 'isign.css'])
    .pipe(concat('app.css'))
    .pipe(gulp.dest(config.css));
})

gulp.task('default', ['less', 'css'], function() {
  console.log('Finished Running Default');
});