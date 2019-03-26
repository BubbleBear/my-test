const net = require('net');

const requestHeader = '\
GET /code_ip/getNotice?ip=116.226.72.200 HTTP/1.1\r\n\
host: localhost\r\n\
connection: close\r\n\
\r\n';

const socket = net
.connect({
    port: 3200,
    host: '127.0.0.1',
})
.on('data', (chunk) => {
    chunk && console.log(chunk.toString());
})
.on('error', (err) => {
    console.log(err)
})

socket.write(requestHeader);
