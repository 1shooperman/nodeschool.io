/**
 *  Write a program that performs an HTTP GET request to a URL provided to you 
 *  as the first command-line argument. Collect all data from the server (not 
 *  just the first "data" event) and then write two lines to the console 
 *  (stdout).
 *  
 *  The first line you write should just be an integer representing the number 
 *  of characters received from the server. The second line should contain the 
 *  complete String of characters sent by the server.
 */
var bl = require("bl");
var http = require('http');
var url = process.argv[2];

http.get(url, function(res) {
//	res.setEncoding("utf8");
	
	res.pipe(bl(function (err, data) {
		if (err)
			return console.error(err);
//		console.log('pipe err:');
//		console.log(err);
		
//		console.log('pipe data (as str):')
		console.log(data.toString().length);
		console.log(data.toString());
	}))	
	
//	res.on("data", function(data) {
//		console.log('on data:')
//		console.log(data)
//	});
//
//	res.on("error", function(err) {
//		console.log(err)
//	});
//
//	res.on("end", function() {
//		console.log('done!');
//	});
});