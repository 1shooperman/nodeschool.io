/**
 * module [Dir name] [Ext filter] [Callback]
 */
var fs = require('fs');
var path = require('path');

module.exports = function(dirname, filter, callback) {
	fs.readdir(dirname, function(err, list) {
		if (err) {
			return callback(err, null);
		} else {
			var files = [];
			list.forEach(function(file) {
				if (path.extname(file) === '.' + filter) {
					files.push(file);
					//return callback(null, file);
				}
			});
			return callback(null, files);
		}
	});
};