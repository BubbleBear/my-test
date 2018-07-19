const http = require('http');

let request = http.request('http://localhost:5004', (res) => {
    res.connection.emit('error')
    if (res.statusCode === 200) {
        res.pipe(process.stdout);
    }
}).on('error', (e) => {
    console.log(e);
});

request.flushHeaders();
