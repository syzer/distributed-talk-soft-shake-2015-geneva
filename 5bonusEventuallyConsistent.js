var Model = require('scuttlebutt/model');
var am = new Model;
var as = am.createStream();

var bm = new Model;
var bs = bm.createStream();

var cm = new Model;
var cs = cm.createStream();

var dm = new Model;
var ds = dm.createStream();

var em = new Model;
var es = em.createStream();

as.pipe(bs).pipe(as);
bs.pipe(cs).pipe(bs);
bs.pipe(ds).pipe(bs);
ds.pipe(es).pipe(ds);

em.on('update', function (key, value, source) {
    console.log(key + ' => ' + value + ' from ' + source);
});

am.set('x', 555);

/**
 a <->  b  <-> c
        ^
        |
        v
        d <-> e

a NOT connected to e
 but eventually get the message

 node model.js
 x,555 => 1445593032513 from 90D5E5C9B96DC48BA2AE4EA2
 */
