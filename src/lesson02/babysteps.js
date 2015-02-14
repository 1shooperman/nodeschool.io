/**
 * using argv
 */
var args = process.argv;
var total = 0;
for (var i in args) {
	if (i > 1) {
		total = +args[i] + total;
	} 
}
console.log(total);

/*
official solution:

var result = 0

for (var i = 2; i < process.argv.length; i++)
  result += Number(process.argv[i])

console.log(result)

*/