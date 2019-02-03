const stream = require('stream');
const net = require('net');

const rs = new stream.Readable({ read() {} });

const ws = new stream.Writable({ write(chunk, encoding, callback) { callback() } });

r(rs)

w(ws)

rs.pipe(ws, null)

rs.push('asdf')

// rs.destroy('asdf')

setTimeout(() => {
    // rs.emit('error', 'fdsa')
    rs.push(null)
    // rs.destroy()
}, 1000);

const a = new net.Socket();

function r(rs) {
    rs
        .on('close', () => {
            console.log('rs close');
        })
        .on('end', () => {
            console.log('rs end');
        })
        .on('error', (error) => {
            console.log('rs error: ', error);
        })
}

function w(ws) {
    ws
        .on('close', () => {
            console.log('ws close');
        })
        .on('finish', () => {
            console.log('ws finish');
        })
        .on('error', (error) => {
            console.log('ws error: ', error);
        })
}
