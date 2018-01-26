const net = require('net');

const localServerPort = 5003;
const remoteServerPort = 5001;

let serverEventList = {
    error(err) {
        console.log(err);
        this.close();
    },

    listening() {
        const addr = this.address();
        console.log(`start listening at ${addr.address}:${addr.port} with ${addr.family}`);
    }
}

let socketEventList = {
    error(err) {
        console.log(err);
        this.destroy();
    },

    connect() {
        console.log(`connected to ${this.remoteAddress}:${this.remotePort} with ${this.remoteFamily}`);
    }
}

function register(target, eventList) {
    for (let event in eventList) {
        target.on(event, eventList[event].bind(target));
    }
}

const tcpServer = net.createServer((socket) => {
    ;
});

const remoteSocket = net.createConnection({port: remoteServerPort}, () => {
    ;
})

const localSocket = net.createConnection({port: localServerPort}, () => {
    ;
})

register(tcpServer, serverEventList);
register(remoteSocket, socketEventList);
register(localSocket, socketEventList);

tcpServer.listen(localServerPort);
