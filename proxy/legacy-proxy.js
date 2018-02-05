const http = require('http');
const url = require('url');

const PROXY_PORT = 5555;

function legacyProxy(cReq, cRes) {
    let options = url.parse(cReq.url);
    options.headers = cReq.headers;

    let sReq = http.request(options, (sRes) => {
        cRes.writeHead(sRes.statusCode, sRes.headers);
        sRes.pipe(cRes);
    }).on('error', (e) => {
        console.log(e);
    });

    cReq.pipe(sReq);
}

// const server = http.createServer(legacyProxy).listen(PROXY_PORT);

// server.on('error', (e) => {
//     console.dir(e);
// })

module.exports = legacyProxy;
