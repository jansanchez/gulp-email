/**
 * Module dependencies.
 */

var exec = require("child_process").exec;

/*
 * Execute.
 *
 */

var Execute = function Execute(command, callback) {
  this.execute(command, callback);
};

/**
 * Execute prototype.
 */


/**
 * Execute Command.
 */
Execute.prototype.execute = function(command, callback){
  exec(command, function (error, stdout, stderr) {
    callback(JSON.parse(stdout), error);
  });
};


/**
 * Expose `Execute`.
 */
module.exports = Execute;
