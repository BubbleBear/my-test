const fs = require('fs');
const stream = require('stream');

const rs = fs.createReadStream('chain.js')

class D extends stream.Duplex {
    constructor(opt) {
        super(opt);

        const that = this;

        const events = ['error', 'close', 'end', 'pipe', 'unpipe', 'drain', 'finish']

        for (const event of events) {
            this.on(event, () => {
                console.log(event);
            })
        }

        this.on('finish', () => {
            // that.emit('end')
            that.push(null)
        }).on('error', err => {
            console.log(err)
        })
    }

    _read(size) {
        console.log('piping out')
        while (this._readableState.buffer.length) {
            this.push(this._readableState.buffer.shift());
        }
    }

    _write(chunk, encoding, callback) {
        console.log('piping in')
        this._readableState.buffer.push(chunk);
        this._read(chunk.size);
        callback();
    }
}

let d = new D()
let e = new D()
let f = new D()

rs.pipe(d).pipe(e).pipe(f).pipe(process.stdout)
