// 26 LOC log stream AKA Apache Kafka :)
const dnode = require('dnode');
const net = require('net');
const fs = require('fs');

net.createServer((c) => {
    var d = dnode({
        transform: (s, cb) => {
            cb(s.replace('bad :(', 'awesome :)')
                .toUpperCase())
        }
    });
    var log = fs.createWriteStream('log.txt');
    c.pipe(d).pipe(c).pipe(log);
}).listen(8080);

var es = dnode();
es.on('remote', (remote) => {
    remote.transform('Logs are bad :(', (s) => {
        console.log('=> ' + s);
        es.end();
    });
});

var cs = net.connect(8080);
cs.pipe(es).pipe(cs);
