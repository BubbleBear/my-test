const http = require('http');
const net = require('net');
const url = require('url');
const DummyCipher = require('../cipher/dummy');

function proxyWrapper({Cipher, Decipher} = {Cipher: DummyCipher, Decipher: DummyCipher}) {
    return function tunnelProxy(cReq, cSock, head) {
        let u = url.parse('http://' + cReq.url);

        let sSock = net.connect({port: u.port, host: u.hostname}, () => {
            cSock.write('HTTP/1.1 200 Connection Established\r\n\r\n');
            sSock.write(head);
            sSock.pipe(new Cipher()).pipe(cSock);
            cSock.pipe(new Decipher()).pipe(sSock);
        }).on('error', (e) => {
            console.log(e);
        });
    }
}

if (require.main === module) {
    const PROXY_PORT = 6666;

    const server = http.createServer()
        .on('connect', proxyWrapper())
        .listen(PROXY_PORT);

    server.on('error', (e) => {
        console.dir(e);
    });
}

module.exports = proxyWrapper;
