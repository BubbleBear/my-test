const http = require('http');
const net = require('net');

new Promise((resolve, reject) => {
    http.createServer()
    .on('request', (req, res) => {
        res.end('server received');
    })
    .on('connect', (req, sock, head) => {
        console.log('server connect method received')
        sock.pipe(process.stdout)
    }).listen('5678');
    resolve();
}).then(() => {
    const opts = {
        hostname: 'localhost',
        port: 5678,
        path: 'localhost:5004',
        method: 'connect'
    };

    http.request(opts)
    .on('connect', (res, sock, head) => {
        sock.end('asdf');
    }).end();
});
