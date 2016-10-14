var net = require('net')

     function fillDate (i) {
        return i < 10 ? '0' + i : i 
     }

     var server = net.createServer(function (socket) {
         d = new Date()
         dateTime = d.getFullYear() + '-' +
         fillDate(d.getMonth() + 1) + '-' +
         fillDate(d.getDate()) + ' ' +
         fillDate(d.getHours()) + ':' +
         fillDate(d.getMinutes()) + "\n";
       socket.end(dateTime)
     });



     server.listen(process.argv[2])