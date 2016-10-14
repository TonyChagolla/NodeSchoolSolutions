var http = require('http');
var URL = process.argv[2];


http.get(URL, function(response){
	var out = '';
	response.setEncoding("utf8");
	response.on("data", function (data) {
		out += data;
	});
	response.on("data", function()
	{
		console.log(out.length);
		console.log(out);
	});
});