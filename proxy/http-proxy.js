const http = require('http');
const legacyProxy = require('./legacy-proxy');
const tunnelProxy = require('./tunnel-proxy');

const PROXY_PORT = 5555;

const server = http.createServer().
                    on('connect', tunnelProxy).
                    on('request', legacyProxy).
                    listen(PROXY_PORT);
