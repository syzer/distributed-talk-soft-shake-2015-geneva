// send file stream... not all the file at once
const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const file = path.join(__dirname, 'awesome.mp3');
const size = fs.statSync(file).size;

http.createServer((req, res) => {
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
