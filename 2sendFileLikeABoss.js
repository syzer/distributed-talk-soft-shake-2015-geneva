const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'image/png'});
    fs.createReadStream('bad-ass-witcher.jpg')
        .pipe(res);
}).listen(8080);

console.log('localhost:8080');
