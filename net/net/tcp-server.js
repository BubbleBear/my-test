const net = require('net');

const SERVER_PORT = 5001;

const serverEventList = {
    error(err) {
        console.log(err);
    },

    listening() {
        const addr = this.address();
        console.log(`start listening at ${addr.address}:${addr.port} with ${addr.family}`);
    }
};

const socketEventList = {
    error(err) {
        console.log(err);
        this.close();
    },

    connect() {
        console.log(`connected with ${this.remoteAddress}:${this.remotePort} with ${this.remoteFamily}`);
    },

    data(chunk) {
        if (chunk != null) {
            console.log(chunk.toString());
            this.write('received');
        }
    }
};

const server = net.createServer((socket) => {
    for (let event in socketEventList) {
        socket.on(event, socketEventList[event].bind(socket));
    }
});

for (let event in serverEventList) {
    server.on(event, serverEventList[event].bind(server));
}

server.listen(SERVER_PORT);
