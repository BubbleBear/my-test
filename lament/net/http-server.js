const http = require('http');
const asyncHooks = require('async_hooks');

const SERVER_PORT = 5004;

const server = http
.createServer((req, res) => {
    // console.log('incoming message');
    req.on('error', e => {
        console.log('request error: ', e);
    });

    res.on('error', e => {
        console.log('response error: ', e);
    })

    res.write('hello')
    res.end(`${req.socket.remoteAddress}:${req.socket.remotePort}`);
})
.on('connection', (socket) => {
    console.log(`${socket.remoteAddress}:${socket.remotePort} connected`);
})
.on('error', (err) => {
    console.log('error: ', err);
})
.on('clientError', (err) => {
    console.log('client error: ', err);
})
.listen(SERVER_PORT, () => {
    console.log('listening');
});
