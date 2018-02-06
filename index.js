const fs = require('fs');
const stream = require('stream');

const rs = fs.createReadStream('chain.js')

class D extends stream.Duplex {
    constructor(opt) {
        super(opt);
    }

    _read(size) {
        while (this._readableState.buffer.length) {
            this.push(this._readableState.buffer.shift());
        }
    }

    _write(chunk, encoding, callback) {
        this._readableState.buffer.push(chunk);
        fs.createWriteStream('tmp').write(chunk);
        this._read(chunk.size);
        callback();
    }
}

let d = new D()

rs.pipe(d).pipe(process.stdout)
