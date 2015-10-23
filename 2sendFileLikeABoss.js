var http = require('http');
var fs = require('fs');

var server = http
    .createServer(function (req, res) {
        fs.readFile(__dirname + '/bad-ass-witcher.jpg', function (err, data) {
            res.end(data);
        });
    });
server.listen(80);
// show reference transparency
