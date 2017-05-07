var gulp = require('gulp'),
	livereload = require('gulp-livereload'),
	concat = require('gulp-concat'),
	notify = require('gulp-notify');

var src = "src/"
var srcCss = src + "css/";
var srcJs = src + "js/";

var dest = "assets/"
var destCss = dest + "css/";
var destJs = dest + "js/";

var watchPaths = [
	dest + 'css/*.css',
	dest + 'js/*.js'
]

// gulp.src('client/templates/*.jade')
//   .pipe(jade())
//   .pipe(minify())
//   .pipe(gulp.dest('build/minified_templates'));

gulp.task('scripts:app', function(){
	return gulp.src([srcJs + "app/*.js", srcJs + "app/**/*.js"])
			.pipe(concat('app.js'))
			.pipe(gulp.dest(destJs))
			.pipe(notify({message: 'Scripts:app task complete'}));
});
gulp.task('scripts:vendor', function(){
	return gulp.src(srcJs + "vendor/*.js")
			.pipe(concat('vendor.js'))
			.pipe(gulp.dest(destJs))
			.pipe(notify({message: "Scripts:vendor task complete"}));
});
gulp.task('scripts:dependency', function(){
	return gulp.src(srcJs + "vendor/angular-dependency/*.js")
			.pipe(concat('dependency.js'))
			.pipe(gulp.dest(destJs))
			.pipe(notify({message: "Scripts:dependency task complete"}));
});
gulp.task('styles:app', function(){
	return gulp.src(srcCss + "app/*.css")
			.pipe(concat('app.css'))
			.pipe(gulp.dest(destCss))
			.pipe(notify({message: 'Styles:app task complete'}));
});
gulp.task('styles:vendor', function(){
	return gulp.src(srcCss + "vendor/*.css")
			.pipe(concat('vendor.css'))
			.pipe(gulp.dest(destCss))
			.pipe(notify({message: "Styles:vendor task complete"}));
});

gulp.task('watch', function(){
	gulp.watch(srcCss + '**/*.css', ['styles']);
	gulp.watch(srcJs + '**/*.js', ['scripts']);

	livereload.listen();
	// gulp.watch(watchPaths).on('change', livereload.changed);
});
gulp.task('scripts', ['scripts:app','scripts:vendor', 'scripts:dependency']);
gulp.task('styles', ['styles:app','styles:vendor']);
gulp.task('default',['styles', 'scripts']);