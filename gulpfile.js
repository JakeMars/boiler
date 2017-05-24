// ------------------------------------------------
// Plugins
// ------------------------------------------------

var gulp 			= require('gulp'),
	sass 			= require('gulp-sass'),
	browserSync 	= require('browser-sync').create(),
	autoprefixer 	= require('gulp-autoprefixer'),
	concat  		= require('gulp-concat'),
	minify_css    	= require('gulp-minify-css'),
	plumber 		= require('gulp-plumber'),
	uglify 			= require('gulp-uglify'),
	watch 			= require('gulp-watch');
	sourcemaps    	= require('gulp-sourcemaps'),
	notify 			= require('gulp-notify'),
	imagemin 		= require('gulp-imagemin'),
	pngquant 		= require('imagemin-pngquant');


// ------------------------------------------------
// Settings
// ------------------------------------------------




// ------------------------------------------------


// SASS to CSS

gulp.task('css', function() {
	gulp.src([
		'./assets/css/working/normalize.css',
		'./assets/css/working/foundation.css',		
		'./assets/css/working/custom.css'
	])	
		.pipe(concat('app.min.css'))
		.pipe(minify_css())
		.pipe(gulp.dest('./assets/css'));

});


// ------------------------------------------------

gulp.task('scripts', function(){
	gulp.src([
		'./assets/js/working/custom.js',		
	])

	.pipe(concat('app.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./assets/js'));
});

// Compile JS




gulp.task('default', ['css', 'scripts']);
