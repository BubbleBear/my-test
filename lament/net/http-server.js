const http = require('http');
const asyncHooks = require('async_hooks');

const SERVER_PORT = 5004;

const server = http.createServer((req, res) => {
    const ip = res.socket.remoteAddress;
    const port = res.socket.remotePort;
    console.log('incoming message');
    console.log(req.headers);
    res.connection.emit('error');
    req.destroy();
    res.write('hello')
    res.end(`${req.socket.remoteAddress}:${req.socket.remotePort}`);
}).listen(SERVER_PORT, () => {
    console.log('listening');
});
