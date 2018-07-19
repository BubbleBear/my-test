const net = require('net');

const socket = net.connect({ port: 52013, host: '120.79.224.128' }, () => {
    socket.write(`${__filename} connected`);
})
.on('data', (chunk) => {
    chunk && console.log(chunk.toString());
    setTimeout(() => {
        socket.write(`${__filename} connecting`);
    }, 5000);
})
