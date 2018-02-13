const http = require('http');
const zlib = require('zlib');
const url = require('url');

const REQUIRED = (require.main !== module);

function curl(opts) {
    return new Promise((resolve, reject) => {
        const req = http.request(opts).on('connect', (res, sock, head) => {
            resolve(sock)
            let chunks = [];

            let headers = assembleHeaders(opts);
            sock.write(headers);

            if (!REQUIRED) {
                sock.on('data', chunk => {
                    chunks.push(chunk);
                }).once('end', () => {onend(chunks)});
            }
        }).on('error', err => {
            console.log(err);
        });

        req.end();
    })
}

function assembleHeaders(opts) {
    const uri = url.parse('http://' + opts.path);
    const method = REQUIRED ? opts.inner.method.toUpperCase() : 'GET';
    const httpVersion = opts.inner && opts.inner.httpVersion ? opts.inner.httpVersion : 1.1;

    // connection has to be close for now, which is to be optimized
    let headers = `${method} ${uri.path} HTTP/${httpVersion}\r\n` + 
                `connection: close\r\n`;
    opts.inner && opts.inner.headers.host || (headers += `host: ${uri.host}\r\n`);

    if (REQUIRED) {
        for (const k in opts.inner.headers) {
            if (k.includes('connection')) continue;
            headers += `${k}: ${opts.inner.headers[k]}\r\n`
        }
    }
    headers += '\r\n';
    return headers;
}

// more like a test case
function onend(chunks) {
    let buffer = Buffer.concat(chunks);
    let response = buffer.toString().split('\r\n\r\n');
    let headers = response[0].split('\r\n');
    let status = headers[0].split(' ');
    let location;

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

    if (status[1] == 200) {
        console.log(response[1]);
    }
}

if (!REQUIRED) {
    curl({
        hostname: 'localhost',
        port: 5555,
        method: 'connect',
        // path: 'wiki.mwbyd.cn/pages/viewpage.action?pageId=12258482'
        path: 'nodejs.org/dist/latest-v8.x/docs/api/tls.html'
        // path: 'localhost:8080/supply-chain1.7.1/#g=1&p=%E8%B0%83%E6%8B%A8'
    });
}

module.exports = curl;
