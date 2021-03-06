var net = require('net');
var dnode = require('dnode');

var server = net.createServer(function (stream) {
    var d = dnode({
        louder : function (s, cb) {
            cb(s.toUpperCase())
        }
    });
    d.pipe(stream).pipe(d);
});
server.listen(8000);

server.on('listening', function () {
    var stream = net.connect(8000);
    var d = dnode();
    d.on('remote', function (remote) {
        remote.louder('hola lisboa', function (s) {
            console.log(s);
        });
    });
});
