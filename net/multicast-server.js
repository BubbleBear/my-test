const dgram = require('dgram');

const serverPort = 5001;
const server = dgram.createSocket('udp4');

let eventList = {
    error(err) {
        console.log(err);
        server.close();
    },

    listening() {
        const addr = server.address();
        console.log(`start listening at ${addr.address}:${addr.port} with ${addr.family}`);
    },

    message(msg, rinfo) {
        console.log('incoming:\n', msg.toString());
        server.send('multicast-server has received', rinfo.port, rinfo.address);
    }
}

for (let event in eventList) {
    server.on(event, eventList[event]);
}

server.bind(serverPort, () => {
    // server.setBroadcast(true);
    // server.addMembership('238.255.255.255');
});
