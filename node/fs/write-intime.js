const fs = require('fs');

const ws = fs.createWriteStream('tmp');

ws.write('asdf');

console.log('a');
