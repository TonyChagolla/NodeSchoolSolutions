var fs = require ('fs');

var value;

fs.readFile(process.argv[2], function(err, data) {
	value = data.toString().split('\n').length - 1;
	console.log(value);
});
