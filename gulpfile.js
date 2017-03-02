const watchify      = require('watchify');
const browserify    = require('browserify');
const gulp          = require('gulp');
const source        = require('vinyl-source-stream');
const buffer        = require('vinyl-buffer');
const gutil         = require('gulp-util');
const babelify      = require('babelify');
const uglify        = require('gulp-uglify');
const sourcemaps    = require('gulp-sourcemaps');
const assign        = require('lodash.assign');
const browserSync   = require('browser-sync');
const sass          = require('gulp-sass');
const autoprefixer  = require('gulp-autoprefixer');
const gulpif        = require('gulp-if');
const del           = require('del');

// setup node enviorment (development or production)
const env = process.env.NODE_ENV;

// ////////////////////////////////////////////////
// Javascript Browserify, Watchify, Babel, React
// https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md
// ////////////////////////////////////////////////

// add custom browserify options here
const customOpts = {
  entries: ['./src/js/index.js'],
  debug: true,
};
const opts = assign({}, watchify.args, customOpts);
const b = watchify(browserify(opts));

// add transformations here
b.transform('babelify', { presets: ['es2015', 'react'] });

gulp.task('js', bundle); // so you can run `gulp js` to build the file
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal

function bundle() {
  return b.bundle()

    // log errors if they happen
    .on('error', gutil.log.bind(gutil, gutil.colors.red(
       '\n\n*********************************** \n' +
      'BROWSERIFY ERROR:' +
      '\n*********************************** \n\n'
      )))
    .pipe(source('main.js'))

    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
    .pipe(gulpif(env === 'production', uglify()))

    // optional, remove if you dont want sourcemaps
    .pipe(sourcemaps.init({ loadMaps: true })) // loads map from browserify file
    // Add transformation tasks to the pipeline here.
    // writes .map file
    .pipe(gulpif(env === 'development', sourcemaps.write('../maps')))
    .pipe(gulp.dest('./public/js'))
    .pipe(browserSync.reload({ stream: true }));
}

// ////////////////////////////////////////////////
// Browser-Sync Tasks
// ////////////////////////////////////////////////

gulp.task('browserSync', function () {
  browserSync({
    server: {
      baseDir: './public/',
    },
  });
});

// ////////////////////////////////////////////////
// HTML Tasks
// ////////////////////////////////////////////////

gulp.task('html', function () {
  return gulp.src('public/**/*.html')
    .pipe(browserSync.reload({ stream: true }));
});

// ////////////////////////////////////////////////
// Styles Tasks
// ///////////////////////////////////////////////

gulp.task('styles', function () {
  gulp.src('src/scss/style.scss')
    .pipe(sourcemaps.init())

      // scss output compressed if production or expanded if development
      .pipe(gulpif(env === 'production', sass({ outputStyle: 'compressed' }),
        sass({ outputStyle: 'expanded' })))
      .on('error', gutil.log.bind(gutil, gutil.colors.red(
         '\n\n*********************************** \n' +
        'SASS ERROR:' +
        '\n*********************************** \n\n'
        )))
      .pipe(autoprefixer({
        browsers: ['last 3 versions'],
        cascade: false,
      }))
    .pipe(gulpif(env === 'development', sourcemaps.write('../maps')))
.pipe(gulp.dest('public/css'))
.pipe(browserSync.reload({ stream: true }));
});

// ////////////////////////////////////////////////
// Delete maps folder in production mode
// ///////////////////////////////////////////////

gulp.task('clean:maps', (env === 'production', deleteMapsFolder));

function deleteMapsFolder() {
  return del([
    'public//maps/**',
  ]);
}

// ////////////////////////////////////////////////
// Watch Tasks
// ////////////////////////////////////////////////

gulp.task('watch', function () {
  gulp.watch('public/**/*.html', ['html']);
  gulp.watch('src/scss/**/*.scss', ['styles']);
});

gulp.task('default', ['js', 'styles', 'browserSync', 'clean:maps', 'watch']);
