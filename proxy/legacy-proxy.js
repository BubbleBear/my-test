const http = require('http');
const url = require('url');
const DummyCipher = require('../cipher/dummy');

const tunnelCurl = require('../net/tunnel-curl');

function proxyWrapper({Cipher, Decipher} = {Cipher: DummyCipher, Decipher: DummyCipher}) {
    return function legacyProxy(cReq, cRes) {
        let options = url.parse(cReq.url);
        options.headers = cReq.headers;

        if (1) {
            const connectOptions = {
                hostname: 'localhost',
                port: 5555,
                method: 'connect',
                path: `${options.hostname}:${options.port || 443}${options.path}`
            }
            const c = tunnelCurl(connectOptions, cRes.socket);
            cReq.pipe(new Cipher()).pipe(c);
            return;
        }

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
