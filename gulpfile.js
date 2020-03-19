const { task, parallel, src, dest, watch } = require('gulp');
const less = require('gulp-less');
const pug = require('gulp-pug');
const coffee = require('gulp-coffeescript');

task('html', () =>
  src('src/*.pug')
    .pipe(pug())
    .pipe(dest('dist/'))
)

task('css', () =>
  src('src/*.less')
    .pipe(less())
    .pipe(dest('dist/'))
);

task('js', () =>
  src('src/*.coffee')
    .pipe(coffee())
    .pipe(dest('dist/'))
);

task('default', parallel('html', 'css', 'js'));

task('watch', () => {
  watch('src/*.pug', task('html'));
  watch('src/*.less', task('css'));
  watch('src/*.coffee', task('js'));
});
