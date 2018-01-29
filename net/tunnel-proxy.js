const http = require('http');
const net = require('net');
const url = require('url');

const PROXY_PORT = 6666;

function proxy(cReq, cRes) {
    let u = url.parse('http://' + cReq.url);

    let pSock = net.connect({port: u.port, host: u.hostname}, () => {
        pSock.write(`HTTP/1.1 200 Connection Established`);
        pSock.pipe(cRes);
    });

    cReq.pipe(pSock);
}

const server = http.createServer()
    .on('connect', proxy)
    .listen(PROXY_PORT);

server.on('error', (e) => {
    console.dir(e);
    server.close();
});
