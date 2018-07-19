const dgram = require('dgram');

const client = dgram.createSocket('udp4');
const clientPort = 5002;
const serverPort = 5001;

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

client.bind(clientPort, () => {
    client.setBroadcast(true);
});

// client.send('hello', serverPort.toString());
client.send('hello', serverPort, '255.255.255.255');
