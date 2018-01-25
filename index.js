const test = require('./chain');
const cluster = require('cluster');
const os = require('os');

// new test();
let i = 0;
console.log(i++);

if (cluster.isMaster) {
    cluster.fork();
}

console.log('ojbk');
