const http = require('http');
const stream = require('stream');

const pendingRequests = Array(10).fill(async () => new Promise((resolve, reject) => {
    const req = http.request({
        hostname: 'www.baidu.com',
        port: null,
    }, (res) => {
        const chunks = [];

        const ws = new stream.Writable({
            write: (chunk, encoding, callback) => {
                chunks.push(chunk);
                callback(null);
            },
            final: () => {
                const buffer = Buffer.concat(chunks);
                resolve(buffer.toString());
            }
        });

        res.pipe(ws);
    }).on('error', (err) => reject(err));

    req.end(null);
}));

async function test() {
    const results = await Promise.all(pendingRequests.map(v => v()));
    
    console.log(results)
}

test()
