const crypto = require('crypto');
const fs = require('fs');
const {performance} = require('perf_hooks')
const stream = require('stream')

const cipher = crypto.createCipher('aes192', 'hello');
const decipher = crypto.createDecipher('aes192', 'hello');

class Pipeline extends stream.Duplex {
    constructor(options) {
        super(options);
        this.eventList = [];
    }

    _write(chunk, encoding, callback) {
        this._readableState.buffer.push(chunk);
        console.log(this._readableState.buffer)
        if (this.eventList.length) {
            this.read();
            this.eventList.shift();
        }
        callback();
    }

    _read(size) {
        if (this._readableState.buffer.length) {
            this.push(this._readableState.buffer.shift())
            console.log(this._readableState.buffer)
        } else {
            this.eventList.push(1);
        }
    }
}

const ds = new Pipeline();

const rs = fs.createReadStream('index.js');
rs.pipe(ds).pipe(process.stdout)
