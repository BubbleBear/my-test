const http = require('http');
const zlib = require('zlib');
const url = require('url');

function curl(options) {
    const req = http.request(options, (res) => {
        const encoding = res.headers['content-encoding'];
        const location = res.headers['location'];
        const chunks = [];
        let content;

        if (location) {
            req.abort();
            res.destroy();
            curl(location);
        }

        res.on('data', chunk => {
            chunks.push(chunk)
        });
        res.on('end', () => {
            let buff = Buffer.concat(chunks);
            switch(encoding) {
                case 'gzip': content = zlib.gunzipSync(buff); break;
                case 'deflate': content = zlib.inflateSync(buff); break;
                default: content = buff;
            }
            console.log(content.toString());
        })
    }).on('error', err => {
        console.log(err);
    });

    req.end();
}

curl({
    hostname: 'nodejs.org',
    path: '/dist/latest-v8.x/docs/api/tls.html'
});
