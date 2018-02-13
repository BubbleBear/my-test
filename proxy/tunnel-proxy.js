const http = require('http');
const net = require('net');
const url = require('url');
const string2readable = require('../utils/string2readable');
const DummyCipher = require('../cipher/dummy');

const REQUIRED = (require.main !== module);

function proxyWrapper({Cipher, Decipher} = {Cipher: DummyCipher, Decipher: DummyCipher}) {
    return function tunnelProxy(cReq, cSock, head) {
        let options = url.parse('http://' + cReq.url);
        options.port || (options.port = 80);

        let sSock = net.connect({port: options.port, host: options.hostname}, () => {
            string2readable('HTTP/1.1 200 Connection Established\r\n\r\n').pipe(new Cipher()).pipe(cSock);
            string2readable(head).pipe(new Decipher()).pipe(sSock);
            sSock.pipe(new Cipher()).pipe(cSock);
            cSock.pipe(new Decipher()).pipe(sSock);
        }).on('error', (e) => {
            console.log(`tunnel-proxy\n`, cReq.url, e);
        });
    }
}

if (!REQUIRED) {
    const PROXY_PORT = 6666;

    const server = http.createServer()
        .on('connect', proxyWrapper())
        .listen(PROXY_PORT);

    server.on('error', (e) => {
        console.dir(e);
    });
}

module.exports = proxyWrapper;
