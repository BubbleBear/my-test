const http = require('http');
const net = require('net');
const url = require('url');

const PROXY_PORT = 6666;

function tunnelProxy(cReq, cSock, head) {
    let u = url.parse('http://' + cReq.url);

    let sSock = net.connect({port: u.port, host: u.hostname}, () => {
        cSock.write('HTTP/1.1 200 Connection Established\r\n\r\n');
        sSock.write(head);
        sSock.pipe(cSock);
        cSock.pipe(sSock);
    }).on('error', (e) => {
        console.log(e);
    });
}

const server = http.createServer()
    .on('connect', tunnelProxy)
    .listen(PROXY_PORT);

server.on('error', (e) => {
    console.dir(e);
});
