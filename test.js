const fs = require('fs');
const net = require('net');

const TEST_DIR = '/Users/vatel/Downloads';

// const fd = fs.openSync('/Users/vatel/Downloads/a.jpg', 'r');
// const buffer = 
// const rs = fs.readSync(fd, )

const file = fs.readFileSync(`${TEST_DIR}/a.jpg`);

const server = net.createServer((socket) => {
    socket.on('data', chunk => {
        fs.writeFileSync(`${TEST_DIR}/b.jpg`, chunk, {
            flag: 'a+'
        })
    })
}).listen('3333');

const client = net.connect(3333).write(file);
