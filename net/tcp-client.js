const net = require('net');

const SERVER_PORT = 5001;
const PROXY_PORT = 5003;

const eventList = {
    error(err) {
        console.log(err);
        this.close();
    },

    connect() {
        console.log(`local info: ${this.localAddress}:${this.localPort}`);
        console.log(`connected with ${this.remoteAddress}:${this.remotePort} with ${this.remoteFamily}`);
    },

    data(chunk) {
        if (chunk != null) {
            console.log(chunk.toString());
        }
    }
}

const client = net.createConnection({port: SERVER_PORT}, () => {
    client.write(Symbol('hello').toString());
});

for (let event in eventList) {
    client.on(event, eventList[event].bind(client));
}
