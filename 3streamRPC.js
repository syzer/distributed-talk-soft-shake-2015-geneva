const dnode = require('dnode');
const net = require('net');

net.createServer((c) => {
    var d = dnode({
        transform: (s, cb) => {
            cb(s.replace('bad :(', 'awesome :)')
                .toUpperCase())
        }
    });
    c.pipe(d).pipe(c);
}).listen(8080);

var d = dnode();
d.on('remote', (remote) => {
    remote.transform('RPC is bad :(', (s) => {
        console.log('=> ' + s);
        d.end();
    });
});

var c = net.connect(8080);
c.pipe(d).pipe(c);
