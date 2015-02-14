/**
 *   LEARN YOU THE NODE.JS FOR MUCH WIN!
 *   ─────────────────────────────────────
 *    JUGGLING ASYNC
 *     Exercise 9 of 13
 *     
 *     This problem is the same as the previous problem (HTTP COLLECT) in that 
 *     you need to use http.get(). However, this time you will be provided with
 *     three URLs as the first three command-line arguments.
 *     
 *     You must collect the complete content provided to you by each of the 
 *     URLs and print it to the console (stdout). You don't need to print out 
 *     the length, just the data as a String; one line per URL. The catch is 
 *     that you must print them out in the same order as the URLs are provided 
 *     to you as command-line arguments.
 */
var bl = require("bl");
var http = require('http');
var urls = [
    process.argv[2],
    process.argv[3],
	process.argv[4],
];

var results = [];

urls.forEach(function(url, index) {
	//console.log(index);
	http.get(url, function(res) {
		res.setEncoding("utf8");
		
		res.pipe(bl(function (err, data) {
			if (err)
				return console.error(err);
			
			results[index] = data.toString();
		}));
		
		res.on("end", function() {
			if (results.length === 3 && 
					results[0] && 
					results[1]) {
				console.log(results[0]);
				console.log(results[1]);
				console.log(results[2]);
			}
		});
	});
});