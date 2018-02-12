const net = require('net')
const http = require('http')

let opts = {
    host: 'nodejs.org',
    port: 80
};

const req = net.connect(opts, () => {
    let headers;

    // headers = `GET /measyV1.7_0123/data/document.js HTTP/1.1\r\n` +
    // `host: localhost:8080\r\n` +
    // `proxy-connection: keep-alive\r\n` +
    // `pragma: no-cache\r\n` +
    // `cache-control: no-cache\r\n` +
    // `user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36\r\n` +
    // `accept: */*\r\n` +
    // `referer: http://localhost:8080/measyV1.7_0123/\r\n` +
    // `accept-language: en-US,en;q=0.9\r\n\r\n`;

    headers = 'GET /measyV1.7_0123/data/document.js HTTP/1.1\r\n' +
    'host: localhost:8080\r\n' +
    'user-agent: Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.5)\r\n' + 
    'accept: text/html\r\n' +
    'connection: keep-alive\r\n' +
    '\r\n';

    console.log(headers)

    req.write(headers);

    // req.pipe(process.stdout);
});
