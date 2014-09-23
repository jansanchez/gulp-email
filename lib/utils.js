/**
 * Utils.
 */

var Utils = {
	fixDirName: function (dirname){
		var newDirname = "";
		if (dirname.toString().indexOf(".") === -1) {
			newDirname = dirname + "/";
		}
		return newDirname;
	},
	getFolderName: function (base, dirname){
		var arrayFolders = (base + dirname).match(/[a-zA-Z0-9_-]+\/+/gi),
			folderName = arrayFolders[arrayFolders.length -1];
			folderName = folderName.replace("/", "");
		return folderName;
	}
};


/**
 * Expose `Utils`.
 */

module.exports = Utils;
