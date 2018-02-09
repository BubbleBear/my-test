const http = require('http');
const zlib = require('zlib');
const url = require('url');

function curl(u) {
    const req = http.request(Object.assign({method: 'get'}, 
                url.parse(u)), (res) => {
        const encoding = res.headers['content-encoding'];
        const location = res.headers['location'];
        const chunks = [];
        let content;

        if (location) {
            req.abort();
            res.destroy();
            curl(location);
        }

        res.on('data', chunk => {chunks.push(chunk)});
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

// curl('http://wiki.mwbyd.cn/pages/viewpage.action?pageId=12258482');
curl('http://nodejs.org/dist/latest-v8.x/docs/api/http.html#http_event_connect')
