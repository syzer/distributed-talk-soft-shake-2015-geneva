var dnode = require('dnode');
var net = require('net');

net.createServer(function (c) {
    var d = dnode({
        transform: function (s, cb) {
            cb(s.replace('bad :(', 'awesome :)')
                .toUpperCase())
        }
    });
    c.pipe(d).pipe(c);
}).listen(8080);

var d = dnode();
d.on('remote', function (remote) {
    remote.transform('RPC is bad :(', function (s) {
        console.log('=> ' + s);
        d.end();
    });
});

var c = net.connect(8080);
c.pipe(d).pipe(c);
