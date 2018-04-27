const { Scanner } = require('directory-scanner');
const path = require('path');

const ds = new Scanner();

const obj = ds.scan(path.resolve(__dirname, '../'));

console.dir(obj);
