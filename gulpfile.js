var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	concat = require('gulp-concat'),
	uglifyjs = require('gulp-uglifyjs'),
	csso = require('gulp-csso'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	spritesmith = require('gulp.spritesmith'),
	autoprefixer = require('gulp-autoprefixer'),
	plumber = require('gulp-plumber'),
	gutil = require('gulp-util'),
	buffer = require('vinyl-buffer'),
	del = require('del'),
  runSequence = require('run-sequence'),
  postcss       = require('gulp-postcss'),
  flexbugs      = require('postcss-flexbugs-fixes');
  gulpIf      = require('gulp-if');
  sourcemaps  = require('gulp-sourcemaps');


var isDevelopment = process.env.NODE_ENV === 'production' ? false : true;
console.log(process.env.NODE_ENV);

// Default task
gulp.task('default', function (callback) {
  runSequence(['sass', 'scripts', 'img'], 'watch',
    callback
  )
})

var postCssProcessors = [
  flexbugs()
]

gulp.task('sass', function () {
	return gulp.src('src/scss/style.scss')
		.pipe(plumber({
			errorHandler: function (error) {
				gutil.log('Error: ' + error.message);
				this.emit('end');
			}
		}))
    .pipe(gulpIf(isDevelopment, sourcemaps.init()))
		.pipe(sass())
		.pipe(autoprefixer(['last 10 versions', '>3%']))
    .pipe( postcss(postCssProcessors) )
    .pipe(gulpIf(isDevelopment, sourcemaps.write()))
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('scripts', function () {
	return gulp.src([
		'src/libs/jquery.1.12.4.js',
		'src/libs/slick-carousel/slick/slick.min.js',
		'src/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
    'src/libs/jquery-validation/dist/jquery.validate.min.js',
    'src/libs/jquery-mask-plugin/dist/jquery.mask.min.js',
    'src/libs/zoomsl-3.0.min.js'
	])
		.pipe(plumber({
			errorHandler: function (error) {
				gutil.log('Error: ' + error.message);
				this.emit('end');
			}
		}))
		.pipe(concat('libs.min.js'))
		.pipe(uglifyjs())
		.pipe(gulp.dest('src/js'))
});


gulp.task('browser-sync', function () {
	browserSync({
		server: {
			baseDir: 'src'
		}
	});
});

//gulp.task('sprite', function () {
//	var spriteData =
//		gulp.src('./src/img/sprites/*.*')
//		.pipe(plumber({
//			errorHandler: function (error) {
//				gutil.log('Error: ' + error.message);
//				this.emit('end');
//			}
//		}))
//		.pipe(spritesmith({
//			imgName: 'sprite.png',
//			cssName: 'sprite.css',
//			cssFormat: 'css',
//			algorithm: 'binary-tree',
//			padding: 3
//		}));
//
//	spriteData.img.pipe(gulp.dest('./src/img/'));
//	spriteData.css.pipe(gulp.dest('./src/css/'));
//});

gulp.task('sprite:png', function() {
    var spriteData = gulp.src('src/img/icons-png/*.png')
    .pipe(plumber({
			errorHandler: function (error) {
				gutil.log('Error: ' + error.message);
				this.emit('end');
			}
		}))
    .pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: '_sprite-png.scss',
        imgPath: '../img/sprite.png',
        retinaSrcFilter: 'src/img/icons-png/*@2x.png',
        retinaImgName: 'sprite@2x.png',
        retinaImgPath: '../img/sprite@2x.png',
        padding: 10,
        algorithm: 'binary-tree',
 				cssTemplate: './src/scss/tpl/sprite.template.mustache'
    }));
    spriteData.img
        .pipe(buffer())
        .pipe(imagemin({
            optimizationLevel: 3
        }))
        .pipe(gulp.dest('src/img/'));
    spriteData.css
        .pipe(gulp.dest('src/scss/'));
});

gulp.task('sprite:png:watch', function() {
    gulp.watch(config.src.iconsPng + '/*.png', ['sprite:png']);
});

gulp.task('img', function () {
	return gulp.src('src/img/**/*')
		.pipe(plumber({
			errorHandler: function (error) {
				gutil.log('Error: ' + error.message);
				this.emit('end');
			}
		}))
		.pipe(imagemin({
			interlaced: true,
			progressive: true,
			svgoPlugins: [{
				removeVeiwBox: false
		}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('dist/img'));
});

gulp.task('clean', function () {
	return del.sync('dist/**');
});


gulp.task('watch', ['browser-sync', 'sass', 'scripts'], function () {
	gulp.watch('src/scss/**/*.scss', ['sass']);
	gulp.watch('src/*.html', browserSync.reload);
	gulp.watch('src/js/**/*.js', browserSync.reload);
});

gulp.task('build', ['clean', 'img', 'sass', 'scripts', ], function () {

	var buildCss = gulp.src('src/css/style.css')
		.pipe(csso({
			sourceMap: false
		}))
		.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('src/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('src/js/**/*')
		.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('src/*.html')
		.pipe(gulp.dest('dist'));

});
