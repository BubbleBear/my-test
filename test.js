const stream = require('stream');

const rs = new stream.Readable({ read() {} });

const ws = new stream.Writable({ write(chunk, encoding, callback) { callback() } });

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

rs.pipe(ws)

rs.push('asdf')

setTimeout(() => {
    rs.emit('end')
    ws.write(null)
    rs.emit('error', 'fdsa')
    rs.push(null)
    rs.destroy('asdf')
}, 1000);
