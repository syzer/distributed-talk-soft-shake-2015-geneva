var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile(__dirname + '/bad-ass-witcher.jpg', function (err, data) {
        res.end(data);
    });
}).listen(8080);
// show reference transparency

console.log('localhost:8080');
