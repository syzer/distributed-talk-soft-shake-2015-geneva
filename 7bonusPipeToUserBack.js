// get whole stream as parameter!
const concat = require('concat-stream');
const http = require('http');

http.createServer((req, res) => {
    if ('POST' !== req.method) {
        return res.end();
    }
    req.pipe(concat((body) => {
        var obj = JSON.parse(body);
        res.end(Object.keys(obj).join('\n'));
    }));
}).listen(8080);


//test with
//curl -H "Content-Type: application/json" -X POST -d '{"username":"xyz","password":"xyz"}' http://localhost:8080

