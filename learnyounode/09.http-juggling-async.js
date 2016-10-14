var http = require('http');
var output = [];



function getHTTP(counter){

(function(i) {
    http.get(process.argv[counter + 2], function(response) {
      var result = "";
      response.setEncoding("utf8");
      response.on("data", function(data) {
        result += data;
      });
      response.on("end", function() {
        output[i] = result;
        var resultCount = 0;
        for (j = 0; j < output.length; j++) {
          if (output[j] != null) resultCount++;
        }
        if (resultCount == output.length) {
          for (j = 0; j < output.length; j++) {
            console.log(output[j]);
          }
        }
      });
    });
  })(i);

}

for (var i = 0; i < 3; i++) {
 output[i] = null;
 getHTTP(i)
}