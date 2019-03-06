const net = require('net');

const SERVER_PORT = 5001;

const serverEventList = {
    error(err) {
        console.log(err);
    },

    listening() {
        const addr = this.address();
        console.log(`start listening at ${addr.address}:${addr.port} with ${addr.family}`);
    },

    connection(socket) {
        console.log('\n');
        setTimeout(() => {
            socket.emit('error', 'shutting')
        }, 100);
    }
};

const socketEventList = {
    data(chunk) {
        if (chunk != null) {
            console.log(chunk.toString());
            this.write('received');
        }
    },

    end() {
        console.log('client disconnected')
    },

    close(hadError) {
        console.log('closed')
    },

    error(err) {
        console.log(err)
        this.destroy();
    },
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
