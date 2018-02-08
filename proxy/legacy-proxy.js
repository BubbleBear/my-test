const http = require('http');
const url = require('url');
const DummyCipher = require('../cipher/dummy');

function proxyWrapper({Cipher, Decipher} = {Cipher: DummyCipher, Decipher: DummyCipher}) {
    return function legacyProxy(cReq, cRes) {
        let options = url.parse(cReq.url);
        options.headers = cReq.headers;

        const fs = require('fs')
        const ws = fs.createWriteStream('tmp')

        let sReq = http.request(options, (sRes) => {
            cRes.writeHead(sRes.statusCode, sRes.headers);
            // sRes.pipe(new Decipher()).pipe(cRes);
            sRes.on('data', chunk => {
                !ws._writableState.ended && chunk && ws.write(chunk.toString());
                cRes.write(chunk);
            }).on('end', () => {
                !ws._writableState.ended && ws.end();
                cRes.end();
            })
        }).on('error', (e) => {
            console.log(e);
        });

        cReq.pipe(new Cipher()).pipe(sReq);
    }
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
