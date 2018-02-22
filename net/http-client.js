const http = require('http');

// const httpAgent = new http.Agent({keepAlive: true});

let options = {
    port: 5004,
    // port: 6666,
    path: 'http://localhost:5004',
    // method: 'connect'
};

let request = http.request(options, (res) => {
    if (res.statusCode === 200) {
        res.pipe(process.stdout);
    }
}).on('connect', (res, sock, head) => {
    sock.pipe(process.stdout);
    sock.write('GET / HTTP/1.1\r\n\r\n');
})

request.on('error', (e) => {
    console.log(e);
});

request.end();
