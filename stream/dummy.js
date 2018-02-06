const { Duplex } = require('stream');

module.exports = class Dummy extends Duplex {
    constructor(options) {
        super(options)
    }

    _read(size) {
        while(this._readableState.buffer.length) {
            this.push(this._readableState.buffer.shift());
        }
    }

    _write(chunk, encoding, callback) {
        this._readableState.buffer.push(chunk);
        this._read(chunk.size);
    }
}