const net = require('net');
const http = require('http');
const url = require('url');

const PROXY_PORT = 5555;

function proxyRequest(cReq, cRes) {
    const u = url.parse(cReq.url);

    console.log(u);

    const options = {
        hostname: u.host,
        port: u.port,
        path: u.pathname,
        headers: cReq.headers,
        method: cReq.method
    };

    pReq = http.request(options, (pRes) => {
        cRes.writeHead(pRes.statusCode, pRes.headers);
        pRes.pipe(cRes);
    }).on('error', (e) => {
        console.log(e);
        cRes.end();
    });

    cReq.pipe(pReq);
}

const server = http.createServer(proxyRequest).listen(PROXY_PORT);

server.on('error', (e) => {
    console.log(e);
})
