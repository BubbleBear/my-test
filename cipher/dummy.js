const { Transform } = require('stream');

module.exports = class Dummy extends Transform {
    constructor(options) {
        super(options);

        const that = this;

        const events = ['error', 'close', 'end', 'pipe', 'unpipe', 'drain', 'finish', 'readable', 'data'];

        for (const event of events) {
            this.on(event, () => {
                console.log(event);
            })
        }

        this.on('error', err => {
            console.log(err)
        })
    }

    _transform(chunk, encoding, callback) {
        this.push(chunk, encoding);
        callback();
    }
}