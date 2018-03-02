const net = require('net');

const NS_PER_SEC = 1e9;
const startTime = process.hrtime();

const socket = net.connect({
    host: 'google.com',
    port: 80
}, () => {
    const pa = process.hrtime(startTime);
    console.log(pa[0] * NS_PER_SEC + pa[1]);
}).on('data', (chunk) => {
    chunk && console.log(chunk.toString());
    socket.end();
}).on('end', () => {
    console.log('end');
    const pa = process.hrtime(startTime);
    console.log(pa[0] * NS_PER_SEC + pa[1]);
}).on('error', (err) => {
    console.log(err);
    const pa = process.hrtime(startTime);
    console.log(pa[0] * NS_PER_SEC + pa[1]);
    socket.destroy();
}).on('timeout', () => {
    console.log('timeout');
    const pa = process.hrtime(startTime);
    console.log(pa[0] * NS_PER_SEC + pa[1]);
    socket.destroy();
})

socket.setTimeout(1000)
socket.write('hello\r\n\r\n');
