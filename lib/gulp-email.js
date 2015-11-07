/**
 * Module dependencies.
 */

var Transform = require('stream').Transform,
	Path = require("path"),
	Buffer = require('buffer').Buffer,
	File = require('vinyl'),
	chalk = require('chalk'),
	fs = require('fs'),
	utils = require('./utils'),
	Execute = require('./execute'),
	extend = require('util')._extend;


/**
 * Gulp Email.
 */
function GulpEmail(opts, cb) {

	this.fullContent = '';
	this.default = {};
	this.cb = cb || this.callback;
	this.options = extend(this.default, opts);
	this.stream = new Transform({objectMode: true});

	this.stream._transform = function(chunk, encoding, callback){
		var fullPath = null,
			file = {},
			relative = chunk.relative;

		file.base = chunk.base;
		file.contents = chunk.contents;

		file.extname = Path.extname(relative);
		file.basename = Path.basename(relative, file.extname);
		file.dirname = Path.dirname(relative);
		file.newDirname = utils.fixDirName(file.dirname);
		fullPath = file.newDirname + file.basename + file.extname;
		file.path = Path.join(chunk.base, fullPath);

		callback(null, self.readContent(file));

	};

	this.stream.on('end', function() {
		//console.log(self.fullContent);
		self.sendEmail(self.prepareCurl(self.fullContent));
	});

	var self = this;

	return this.stream;
}

GulpEmail.prototype.readContent = function(file){
	var currentContent = file.contents.toString();
	this.fullContent += currentContent;
};

GulpEmail.prototype.prepareCurl = function(content){
	var key,
		values,
		args = ['curl', '--no-buffer', '--show-error', '--silent'],
		settings = this.options,
		childrensCounter,
		request,
		haveTextHtml = false,
		subvalues;

	for (key in settings) {
		values = Array.isArray(settings[key]) ? settings[key] : [settings[key]];
		values.forEach(function(value) {
			childrensCounter = 0;
			key = key.replace('_', '-');
			if (key !== 'url') {
				args.push("--" + key);
			}
			if (true !== value) {
				if (typeof value === 'object') {
					for (var subkey in value) {
						subvalues = Array.isArray(value[subkey]) ? value[subkey] : [value[subkey]];
						subvalues.forEach(function(subvalue) {
							childrensCounter++;
							if (childrensCounter !== 1) {
								args.push("--" + key);
							}
							args.push(subkey + "='" + subvalue + "'");
							if (subkey === 'html') {
								haveTextHtml = true;
							}
							if (subkey === 'to') {
								console.log(chalk.yellow('Sending to: ') + chalk.yellow.bold(subvalue));
							}
						});
					}
				} else {
					args.push(value);
				}
			}
		});
	}

	if (haveTextHtml === false) {
		args.push('--form-string');
		content = content.replace(/'/g, '\"');
		//console.log(content);
		args.push('html=\'' + content + '\'');
	}

	request = args.join(" ");
	//console.log(request);

	return request;
};

GulpEmail.prototype.sendEmail = function(request){
	var execute = new Execute(request, this.cb);
};

GulpEmail.prototype.callback = function(data, error){
	if (error) {
		console.log(error);
	}else{
		console.log(data);
	}

};


/**
 * Expose `GulpEmail`.
 */

module.exports = GulpEmail;

