'use strict';

var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	clean = require('gulp-rimraf'),
	stylish = require('jshint-stylish'),
	complexity = require('gulp-complexity');

var path = { src: {} };

path.src.js = ['./index.js', './lib/*.js'];
path.src.complexity = ['./index.js', './lib/*.js'];

gulp.task('default', ['lint'], function() {
	console.log('All the Javascript.');
});

gulp.task('lint', function() {
	return gulp.src(path.src.js)
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(jshint.reporter('fail'));
});

gulp.task('watch', function () {
	var javascriptTasks = ['lint'];

	gulp.watch(path.src.js, javascriptTasks);
});

/*
gulp.task('complexity', function(){
	return gulp.src(path.src.complexity)
		.pipe(complexity());
});
*/

var email = require('./index');

var options = {
	user: 'api:key-bfc71afead753d73cef11c5485c1fd2b',
	url: 'https://api.mailgun.net/v3/sandbox4a0fe54c0059454483eff6624145da45.mailgun.org/messages',
	form: {
		from: 'Jamir Kaleb <jamir.kaleb@gmail.com>',
		to: 'Jan Sanchez Hotmail <joejansanchez@hotmail.com>',
		subject: 'Nuevo mensaje de correo !!!',
		text: 'Texto plano del mensaje, esto se ve?'
	}
};


gulp.task('email', function () {
	return gulp.src('./demo/html/*.html')
	.pipe(email(options, function(data, error){
		console.log(data.message);
	}));
});
