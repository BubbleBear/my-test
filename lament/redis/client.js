const net = require('net');

const REDIS_PORT = 6379;

let eventList = {
    connect() {
        console.log(`connection with ${this.remoteAddress}:${this.remotePort} established`);
    },

    error(err) {
        console.log(err);
        this.close();
    },

    data(chunk) {
        if (chunk != null) {
            console.log(chunk.toString());
        }
    }
}

const client = net.createConnection({port: REDIS_PORT}, () => {
    client.write('set hello world\r\n');
});

for (event in eventList) {
    client.on(event, eventList[event].bind(client));
}
