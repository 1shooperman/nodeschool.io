/**
 * asynchronous I/O FTMFW 
 */
var file = process.argv[2];
var fs = require('fs');

var buffer = fs.readFile(file,'utf8', function (err, buffer) { 
	if (err) {
		console.log(err);
	} else {
		var lines = buffer.split('\n');
		console.log(lines.length - 1);
	}
});