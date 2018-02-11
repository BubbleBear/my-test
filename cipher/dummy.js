const { Transform } = require('stream');

module.exports = class Dummy extends Transform {
    constructor(options) {
        super(options);

        this.on('error', err => {
            console.log(err)
        })
    }

    _transform(chunk, encoding, callback) {
        const fs = require('fs');
        // const ws = fs.createWriteStream('tmp', {flags: 'w'});
        // ws.write(chunk);
        // ws.end();
        fs.writeFileSync('tmp', chunk, {flag: 'a'});
        this.push(chunk, encoding);
        callback();
    }
}