var Stream = require('stream');

var ts = new Stream;
ts.readable = true;
ts.writable = true;

ts.write = function (buf) {
    ts.emit('data', buf.toString().toUpperCase());
};

ts.end = function (buf) {
    if (arguments.length) ts.write(buf);
    ts.emit('end');
};

process.stdin.pipe(ts)
