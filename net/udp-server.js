const dgram = require('dgram');

const server = dgram.createSocket('udp6');

const serverPort = 5001;

let eventList = {
    error(err) {
        console.log(err);
        server.close();
    },

    message(msg, rinfo) {
        console.log('incoming:\n', msg.toString().trimRight());
        server.send('udp-server has received', rinfo.port, rinfo.address);
    },

    listening(anything) {
        const addr = server.address();
        console.log(`start listening at ${addr.address}:${addr.port} with ${addr.family}`);
    }
}

for (let event in eventList) {
    server.on(event, eventList[event]);
}

server.bind(serverPort);
