const http = require('http');

// const httpAgent = new http.Agent({keepAlive: true});

let options = {
    port: 5004,
};

let request = http.request(options, (res) => {
    if (res.statusCode === 200) {
        res.pipe(process.stdout);
    }
})

request.on('error', (e) => {
    console.log(e);
});

request.end();
