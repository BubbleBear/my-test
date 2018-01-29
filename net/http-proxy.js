const http = require('http');
const url = require('url');

const PROXY_PORT = 5555;

function proxy(cReq, cRes) {
    let options = url.parse(cReq.url);
    options.headers = cReq.headers;

    let pReq = http.request(options, (pRes) => {
        cRes.writeHead(pRes.statusCode, pRes.headers);
        pRes.pipe(cRes);
    }).on('error', (e) => {
        console.log(e);
        cRes.end();
    });

    cReq.pipe(pReq);
}

const server = http.createServer(proxy).listen(PROXY_PORT);

server.on('error', (e) => {
    console.dir(e);
    server.close();
})
