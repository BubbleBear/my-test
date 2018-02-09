const http = require('http');
const zlib = require('zlib');
const url = require('url');
const net = require('net');

function curl(opts) {
    const req = http.request(opts).on('connect', (res, sock, head) => {
        let chunks = [];

        sock.write(`GET / HTTP/1.1\r\n` + 
                    `Host: ${url.parse('http:\/\/' + opts.path).host}\r\n` + 
                    `Connection: close\r\n\r\n`);

        sock.on('data', chunk => {
            chunks.push(chunk);
        }).once('end', onend)

        function onend() {
            let buffer = Buffer.concat(chunks);
            let response = buffer.toString().split('\r\n\r\n');
            let headers = response[0].split('\r\n');
            let location;

            console.log(headers)

            for (let header of headers) {
                if (header.indexOf('Location:') === 0) {
                    location = header.slice('Location:'.length).trim();
                }
            }

            if (location) {
                req.abort();
                res.destroy();
                sock.end();
                curl({
                    hostname: 'localhost',
                    port: 5555,
                    method: 'connect',
                    path: location.replace(/https?:\/\//, '')
                });
            }

            console.log(response[1]);
        }
    }).on('error', err => {
        console.log(err);
    });

    req.end();
}

curl({
    hostname: 'localhost',
    port: 5555,
    method: 'connect',
    path: 'wiki.mwbyd.cn/pages/viewpage.action?pageId=12258482'
    // path: 'localhost:8080/supply-chain1.7.1/#g=1&p=%E8%B0%83%E6%8B%A8'
})