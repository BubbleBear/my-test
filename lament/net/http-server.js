const http = require('http');
const asyncHooks = require('async_hooks');

const SERVER_PORT = 5004;

const server = http.createServer((req, res) => {
    const ip = res.socket.remoteAddress;
    const port = res.socket.remotePort;
    console.log('incoming message');
    res.pipe(null)
    // res.end(`${req.socket.remoteAddress}:${req.socket.remotePort}`);
}).listen(SERVER_PORT, () => {
    console.log('listening');
});
