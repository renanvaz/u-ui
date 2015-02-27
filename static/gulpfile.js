<<<<<<< HEAD
=======

>>>>>>> 67dc364383069937ad1bb81fd96edefeff410d20
'use strict';

// Include Gulp & Tools We'll Use
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
<<<<<<< HEAD
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
=======
var del = require('del');
var pagespeed = require('psi');
>>>>>>> 67dc364383069937ad1bb81fd96edefeff410d20

var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

<<<<<<< HEAD
gulp.task('styles', function () {
=======
// Lint JavaScript
gulp.task('jshint', function () {
  return gulp.src('app/js/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'));
});

// Optimize Images
gulp.task('images', function () {
  return gulp.src('app/img/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/img'))
    .pipe($.size({title: 'images'}));
});

// Copy All Files At The Root Level (app)
gulp.task('copy', function () {
  return gulp.src([
    'app/*',
    '!app/*.html',
    '!app/less',
    'node_modules/apache-server-configs/dist/.htaccess'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'))
    .pipe($.size({title: 'copy'}));
});

// Copy Web Fonts To Dist
gulp.task('fonts', function () {
  return gulp.src(['app/fonts/**'])
    .pipe(gulp.dest('dist/fonts'))
    .pipe($.size({title: 'fonts'}));
});

// Compile Less and  automatically prefix stylesheets
gulp.task('styles', function () {
  // For best performance, don't add Sass partials to `gulp.src`
>>>>>>> 67dc364383069937ad1bb81fd96edefeff410d20
  return gulp.src([
      'app/less/main.less'
    ])
    .pipe($.sourcemaps.init())
    .pipe($.less())
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe($.sourcemaps.write())
<<<<<<< HEAD
    .pipe(gulp.dest('app/css/'))
    .pipe($.size({title: 'styles'}));
});

gulp.task('jshint', function () {
  return gulp.src('app/scripts/**/*.js')
    .pipe(reload({stream: true, once: true}))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});

gulp.task('dev', ['styles','jshint']);
gulp.task('serve', ['dev'], function () {
  browserSync({
    notify: false,
    server: 'app'
  });

  gulp.watch(['app/**/*.html'], reload);
  gulp.watch(['app/less/**/*.less'], ['styles', reload]);
  gulp.watch(['app/js/**/*.js'], ['jshint']);
  gulp.watch(['app/img/**/*'], reload);
});

// gulp.task('dist', ['html', 'fonts', 'copy']);
// gulp.task('default', ['dev']);
=======
    .pipe(gulp.dest('app/css'))
    .pipe($.size({title: 'styles'}));
});

// Scan Your HTML For Assets & Optimize Them
gulp.task('html', function () {
  var assets = $.useref.assets({searchPath: '{.tmp,app}'});

  return gulp.src('app/**/*.html')
    .pipe(assets)
    // Concatenate And Minify JavaScript
    .pipe($.if('*.js', $.uglify({preserveComments: 'some'})))
    // Concatenate And Minify Styles
    // In case you are still using useref build blocks
    .pipe($.if('*.css', $.csso()))
    .pipe(assets.restore())
    .pipe($.useref())
    // Minify Any HTML
    .pipe($.if('*.html', $.minifyHtml()))
    // Output Files
    .pipe(gulp.dest('dist'))
    .pipe($.size({title: 'html'}));
});

// Clean Output Directory
gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

// Development
gulp.task('dev', ['jshint', 'styles'], function () {
  gulp.watch(['app/css/**/*.css'], ['styles']);
  gulp.watch(['app/less/**/*.less'], ['styles']);
  gulp.watch(['app/js/**/*.js'], ['jshint']);
});

// Build Production Files, the Default Task
gulp.task('dist', ['jshint', 'html', 'images', 'fonts', 'copy']);
gulp.task('default', ['dist']);

// Run PageSpeed Insights
// Update `url` below to the public URL for your site
gulp.task('pagespeed', pagespeed.bind(null, {
  // By default, we use the PageSpeed Insights
  // free (no API key) tier. You can use a Google
  // Developer API key if you have one. See
  // http://goo.gl/RkN0vE for info key: 'YOUR_API_KEY'
  url: 'https://example.com',
  strategy: 'mobile'
}));

// Load custom tasks from the `tasks` directory
try { require('require-dir')('tasks'); } catch (err) {}
>>>>>>> 67dc364383069937ad1bb81fd96edefeff410d20
