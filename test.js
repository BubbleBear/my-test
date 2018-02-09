const net = require('net')

let opts = {
    host: 'nodejs.org',
    port: 80
};

const req = net.connect(opts, () => {
    req.write('GET / HTTP/1.1\r\n' +
            'Host: wiki.mwbyd.cn\r\n' +
            // 'User-Agent: Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.5)\r\n' + 
            // 'Accept: text/html\r\n' +
            // 'Connection: keep-alive\r\n' +
            '\r\n');

    req.pipe(process.stdout);
});
