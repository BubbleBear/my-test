const net = require('net');

const SERVER_PORT = 5001;
const PROXY_PORT = 5003;

const eventList = {
    connect() {
        console.log('\n');
        this.write('hello world');
        this.end();
        console.log(`local info: ${this.localAddress}:${this.localPort}`);
        console.log(`connected with ${this.remoteAddress}:${this.remotePort} with ${this.remoteFamily}`);
    },

    data(chunk) {
        if (chunk != null) {
            console.log(chunk.toString());
        }
    },

    end() {
        console.log('ended');
    },

    close(e) {
        console.log('closed');
    },

    error(err) {
        console.log(err.toString())
        // this.destroy();
    },
}

const client = net.createConnection({port: SERVER_PORT});

for (let event in eventList) {
    client.on(event, eventList[event].bind(client));
}
