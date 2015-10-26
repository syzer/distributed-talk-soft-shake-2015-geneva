// get whole stream as parameter!
var concat = require('concat-stream');
var http = require('http');

http.createServer(function (req, res) {
    if ('POST' !== req.method) {
        return res.end();
    }
    req.pipe(concat(function (body) {
        var obj = JSON.parse(body);
        res.end(Object.keys(obj).join('\n'));
    }));
}).listen(8080);


//test with
//curl -H "Content-Type: application/json" -X POST -d '{"username":"xyz","password":"xyz"}' http://localhost:8080

