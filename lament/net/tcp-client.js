const net = require('net');

const SERVER_PORT = 5001;
const PROXY_PORT = 5003;

const eventList = {
    connect() {
        console.log(`local info: ${this.localAddress}:${this.localPort}`);
        console.log(`connected with ${this.remoteAddress}:${this.remotePort} with ${this.remoteFamily}`);
    },

    data(chunk) {
        if (chunk != null) {
            console.log(chunk.toString());
        }
    },

    end() {
        // this.end()
        console.log('ended');
    },

    close() {
        // this.end()
        console.log('closed');
    },

    error(err) {
        console.log(err)
        this.destroy();
    },
}

const client = net.createConnection({port: SERVER_PORT}, () => {
    client.write('hello world');
});

for (let event in eventList) {
    client.on(event, eventList[event].bind(client));
}
