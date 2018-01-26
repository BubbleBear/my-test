const net = require('net');

const LOCAL_SERVER_PORT = 5003;
const REMOTE_SERVER_PORT = 5001;

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

let localSocket;

const tcpServer = net.createServer((socket) => {
    localSocket = socket;

    socket.on('close', () => {
        localSocket = null;
    })

    socket.on('data', (chunk) => {
        if (chunk != null) {
            remoteSocket.write(chunk);
        }
    })
});

const remoteSocket = net.createConnection({port: REMOTE_SERVER_PORT}, () => {
    remoteSocket.on('data', (chunk) => {
        if (localSocket != null && chunk != null) {
            localSocket.write(chunk);
        }
    })
})

register(tcpServer, serverEventList);
register(remoteSocket, socketEventList);

tcpServer.listen(LOCAL_SERVER_PORT);
