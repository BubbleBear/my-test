const fs = require('fs');
const http = require('http');
const server = http.createServer();

const router = {
    '/'(req, res) {
        const rs = fs.createReadStream(`${__dirname}/upload.html`);
        rs.pipe(res);
    },
    '/upload'(req, res) {
        req.pipe(process.stdout)
        res.end();
    },
    '/download'(req, res) {
        ;
    },
};

server
    .on('listening', () => {
        console.log('listening on port: 7777')
    })
    .on('request', async (req, res) => {
        const path = req.url.split('?')[0];
        
        if (router[path]) {
            await router[path](req, res);
        } else {
            res.writeHead(404);
            res.end();
        }
    });

server.listen('7777');
