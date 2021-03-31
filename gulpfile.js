const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task ('scss',function(){
     return gulp.src( 'assets/style/scss/style.scss' )
    .pipe(sass())
    .pipe(gulp.dest('assets/style/css/'))
});

gulp.task('watch',function(){
    gulp.watch('assets/style/scss/*/*.scss', gulp.series('scss'));
})

gulp.task('default',gulp.series('scss','watch'));
