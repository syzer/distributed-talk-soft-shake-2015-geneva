var http = require('http');
var fs = require('fs');
var file = __dirname + '/bad-ass-witcher.jpg';

http.createServer((req, res) => {
    fs.readFile(file, (err, data) => {
        res.end(data);
    });
}).listen(8080);
// show reference transparency

console.log('localhost:8080');
