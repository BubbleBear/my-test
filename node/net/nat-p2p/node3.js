const dgram = require('dgram');

const node = dgram.createSocket('udp4');

node.send('hello', 52013, '120.79.224.128');

node.on('message', (msg, rinfo) => {
    if (msg == 'hello') {
        node.send('received', rinfo.port, rinfo.address);
    }

    let peerList = [];

    try {
        peerList = JSON.parse(msg);
    } catch (e) {
        console.log(msg.toString());
    }

    peerList.map(async v => {
        let [address, port] = v.split(':');
        node.send('hello', port, address);
    });
})
