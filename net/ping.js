const ping = require('net-ping');

const session = ping.createSession();

const tm = process.hrtime();

const google = '74.125.204.139';
const baidu = '202.108.22.5';

let onuse = google;

session.pingHost(onuse, (err, tar, sent, rcvd) => {
    const cost = rcvd - sent;
    console.log('ping ' + cost);
    const pcost = process.hrtime(tm);
    console.log('ping ' + pcost[0] * 1e9 + pcost[1]);
    err && console.log(tar + ' : ' + err.toString())
})



const net = require('net');

const tm1 = process.hrtime();

net.createConnection({
    host: onuse,
    port: 443
}, () => {
    const pcost = process.hrtime(tm1);
    console.log('tcp ' + pcost[0] * 1e9 + pcost[1]);
}).setTimeout(1000)
