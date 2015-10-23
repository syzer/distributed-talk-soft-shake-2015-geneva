var dnode = require('dnode');
var net = require('net');

net.createServer(function (c) {
    var d = dnode({
        transform : function (s, cb) {
            cb(s.replace('bad :(', 'awesome :)').toUpperCase())
        }
    });
    var log = fs.createWriteStream('message.txt');
    c.pipe(d).pipe(c);
}).listen(8080);


3streamLogs.js

var d = dnode();
d.on('remote', function (remote) {
    remote.transform('bad :(', function (s) {
        console.log('=> ' + s);
        d.end();
    });
});

var c = net.connect(8080);
c.pipe(d).pipe(c);
