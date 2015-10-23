var dnode = require('dnode');
var net = require('net');
var fs = require('fs');

net.createServer(function (c) {
    var d = dnode({
        transform : function (s, cb) {
            cb(s.replace('bad :(', 'awesome :)').toUpperCase())
        }
    });
    var log = fs.createWriteStream('log.txt');
    c.pipe(d).pipe(c).pipe(log);
}).listen(8080);


var d = dnode();
d.on('remote', function (remote) {
    remote.transform('Logs are bad :(', function (s) {
        console.log('=> ' + s);
        d.end();
    });
});

var c = net.connect(8080);
c.pipe(d).pipe(c);
