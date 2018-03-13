const fs = require('fs');

const test = 'asdfafsadfsdafds';

const fd = fs.openSync('tmp', 'a');

fs.writeSync(fd, test, 0);

fs.closeSync(fd);
