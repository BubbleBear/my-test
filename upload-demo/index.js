const http = require('http');
const fs = require('fs');
const formidable = require('formidable');

const server = http.createServer()
    .on('request', (req, res) => {
        const path = req.url.split('?')[0];
        route[path] && route[path](req, res) || res.end('');
    }).listen('8989');

const route = {
    '/': (req, res) => {
        fs.createReadStream('./upload.html').pipe(res);
        return true;
    },

    '/upload': (req, res) => {
        const ws = fs.createWriteStream('./tmp');
        const form = new formidable.IncomingForm();
        form.uploadDir = './';
        form.keepExtensions = true;

        form.parse(req, () => {
            console.log('ok');
            res.end('');
        })
        return true;
    }
}
