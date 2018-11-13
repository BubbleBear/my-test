const http = require('http');
const stream = require('stream');

const CONCURS = 10000;

function all(promises) {
    return new Promise((resolve, reject) => {
        let resolves = [];
        let rejects = [];

        for (const promise of promises) {
            promise
                .then((result) => {
                    resolves.push('ok');
                    resolves.length + rejects.length === promises.length && resolve({ resolves, rejects });
                })
                .catch((e) => {
                    rejects.push(e.message);
                    resolves.length + rejects.length === promises.length && reject({ resolves, rejects });
                });
        }
    });
}

const pendingRequests = Array(CONCURS).fill(async () => new Promise((resolve, reject) => {
    const req = http.request({
        hostname: null,
        port: 5004,
        // hostname: 'www.baidu.com',
        // port: null,
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

        req.removeAllListeners('timeout');
    })
    .on('error', (err) => {
        reject(err);
    })
    .setTimeout(3000, () => {
        req.emit('error', new Error('timeout'));
    });

    req.end(null);
}));

async function test() {
    try {
        const results = await all(pendingRequests.map(v => v()));
        console.log(results)
    } catch (e) {
        console.log(e);
    }
}

test();
