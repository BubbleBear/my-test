const dgram = require('dgram');

const client = dgram.createSocket('udp6');

const serverPort = 5001;
const clientPort = 5002;

let eventList = {
    error(err) {
        console.log(err);
        client.close();
    },

    message(msg, rinfo) {
        console.log('incoming:\n', msg.toString());
    }
}

for (let event in eventList) {
    client.on(event, eventList[event]);
}

client.bind(clientPort);

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk != null) {
        client.send(chunk.toString(), serverPort);
    }
});
