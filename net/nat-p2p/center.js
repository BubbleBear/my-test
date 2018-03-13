const dgram = require('dgram');

const center = dgram.createSocket('udp4');

const peerSet = [];

center.on('message', (msg, rinfo) => {
    console.log(`${msg} from ${rinfo.address}:${rinfo.port}`);
    if (msg == 'hello') {
        center.send(JSON.stringify(peerSet), rinfo.port, rinfo.address);
        peerSet.push(`${rinfo.address}:${rinfo.port}`);
    }
})
.bind(52013);
