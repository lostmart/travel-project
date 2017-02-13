var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){
          console.log('Gulp task created!');
          });

gulp.task('html', function(){
   console.log('another task, called html');
});

gulp.task('styles', function(){
   console.log('another task, called styles, now!');
});

gulp.task('watch', function(){
    watch('./app/index.html', function(){
       gulp.start('html');
    });
    
    watch('./app/assets/styles/**/*.css', function(){
       gulp.start('styles');
    });
});
