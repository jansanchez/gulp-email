/**
 * Module dependencies.
 */

var GulpEmail = require('./lib/gulp-email');


/**
 * Expose library.
 */

module.exports = function(options, callback){
	var gulpEmail = new GulpEmail(options, callback);
	return gulpEmail;
};
