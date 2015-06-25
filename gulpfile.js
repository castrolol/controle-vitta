'use strict';

var watchify = require('watchify');
var browserify = require('browserify');
var gbrowserify = require('gulp-browserify');
var babelify = require("babelify");
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var watch = require("gulp-watch");
var babel = require("gulp-babel");
var plumber = require("gulp-plumber");
var rename = require("gulp-rename");
var copy = require("gulp-copy");
var less = require("gulp-less");

var paths = {
	client: {
		src: './src/client/app.js',
		watch: ['./src/client/**/*.js', './src/client/**/*.jsx'],
		dst: './dist/js'
	},
	server: {
		src: './src/server/**/*.js',
		dst: './build'
	},
	assets: {
		src: ['./static/**/*.html', './static/**/*.css'],
		dst: './dist'
	},
	less: {
		src: './src/less/style.less',
		watch: './src/less/**/*.less',
		dst: './dist/css'
	}
}

watchify.args.entries = [paths.client.src];
watchify.args.debug = true;
watchify.args.extensions = [".jsx"]; 

var w = watchify(browserify(watchify.args));
w.transform(babelify, {
	stage: 0, optional: ['runtime']
});

gulp.task('js', bundle);
w.on('update', bundle);
w.on('log', gutil.log);

function bundle() {
	return w.bundle()
		//.on('error', gutil.log.bind(gutil, 'Browserify Error'))
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({
			loadMaps: true
		}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(paths.client.dst));
}

gulp.task("js-in-vm", function() {

	return gulp.src(paths.client.src)
		.pipe(plumber())
		.pipe(gbrowserify({
			transform:  [babelify.configure({ stage: 0, optional: ['runtime'] })],
			extensions: ['.jsx', '.js'] 
		}))
		.pipe(rename('app.js'))
		.pipe(sourcemaps.write('./sourcemaps'))
		.pipe(gulp.dest(paths.client.dst));
});

gulp.task("build", function() {

	return gulp.src(paths.server.src)
		.pipe(plumber())
		.pipe(babel({
			stage: 0,
			optional: ["runtime"]
		}))
		.pipe(gulp.dest(paths.server.dst));

});

gulp.task("assets", function(){
	
	return gulp.src(paths.assets.src)
				.pipe(plumber())
				.pipe(copy(paths.assets.dst, { prefix: 1 }));
	
});

gulp.task("less", function(){
	return gulp.src(paths.less.src)
				.pipe(plumber())
				.pipe(less())
				.pipe(gulp.dest(paths.less.dst));
});

gulp.task("watch", function() {

	watch(paths.server.src, function() {
		gulp.run(["build"]);
	});
	
	watch(paths.assets.src, function() {
		gulp.run(["assets"]);
	});
	
	watch(paths.less.watch, function() {
		gulp.run(["less"]);
	});

});

gulp.task("watch-for-vm", function() {
	watch(paths.client.watch, function() {
		gulp.run("js-in-vm");
	});
})

gulp.task("default", ["assets", "less", "js", "build", "watch"]);

gulp.task("vm", ["assets", "less", "js-in-vm", "build", "watch", "watch-for-vm"]);