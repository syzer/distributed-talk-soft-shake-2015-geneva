// send file stream... not all the file at once
var http = require('http');
var fs = require('fs');
var path = require('path');
var zlib = require('zlib');
var file = path.join(__dirname, 'awesome.mp3');
var size = fs.statSync(file).size;
http.createServer(function (req, res) {

    // allow client to skip to requested part of stream
    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': size,
        'Content-encoding': 'gzip',
        'Transfer-Encoding': 'gzip'
    });

    fs
        .createReadStream(file)
        .pipe(zlib.createGzip())
        .pipe(res);
}).listen(8080);
