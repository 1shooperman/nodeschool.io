/**
 * 
 */

// requires
var fs = require('fs');
var path = require('path');

// args
var folder = process.argv[2];
var filter = process.argv[3];

// main
fs.readdir(folder, function(err, list) {
	if (err) {
		console.log(err);
	} else {
		var file;
		for (var i in list) {
			file = list[i];
			if (path.extname(file) == '.' + filter) {
				console.log(file);
			}
			//console.log(path.extname(file)); 
				
		}
		//console.log(list);
	}
});



// using foreach:

//var fs = require('fs')
//var path = require('path')
//
//fs.readdir(process.argv[2], function (err, list) {
//  list.forEach(function (file) {
//    if (path.extname(file) === '.' + process.argv[3])
//      console.log(file)
//  })
//})
