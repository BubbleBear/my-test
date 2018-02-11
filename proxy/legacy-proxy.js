const http = require('http');
const url = require('url');
const DummyCipher = require('../cipher/dummy');

const tunnel = require('./tunnel-proxy')();
const tunnelCurl = require('../net/tunnel-curl');

function proxyWrapper({Cipher, Decipher} = {Cipher: DummyCipher, Decipher: DummyCipher}) {
    return function legacyProxy(cReq, cRes) {
        let options = url.parse(cReq.url);
        options.headers = cReq.headers;

        // if (options.protocol == 'https:' || options.port == 443) {
        //     const connectOptions = {
        //         hostname: 'localhost',
        //         port: 5555,
        //         path: `${options.hostname}:${options.port || 443}${options.path}`
        //     }
        //     console.log(connectOptions)
        //     const sock = tunnelCurl(connectOptions);
        //     // cReq.pipe(new Cipher()).pipe(sock);
        //     // sock.pipe(new Decipher()).pipe(cRes);
        //     return;
        // }

        let sReq = http.request(options, (sRes) => {
            cRes.writeHead(sRes.statusCode, sRes.headers);
            sRes.pipe(new Decipher()).pipe(cRes);
        }).on('error', (e) => {
            console.log(`legacy-proxy\n`, e);
        });

        cReq.pipe(new Cipher()).pipe(sReq);
    };
}

if (require.main === module) {
    const PROXY_PORT = 5555;

    const server = http.createServer()
        .on('request', proxyWrapper())
        .listen(PROXY_PORT);

    server.on('error', (e) => {
        console.dir(e);
    })
}

module.exports = proxyWrapper;
