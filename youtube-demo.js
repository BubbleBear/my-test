const https = require('https');
const fs = require('fs');

const ProxyAgent = require('proxy-agent');

const ws = fs.createWriteStream('x.json')

function search(songname, cookie) {
    const path = '/results?search_query=%E5%AE%89%E5%A6%AE%E7%9A%84%E4%BB%99%E5%A2%83&pbj=1';

    const agent = new ProxyAgent('http://localhost:6666');

    const client = https.request({
        host: 'www.youtube.com',
        path,
        method: 'GET',
        headers: {
            'x-youtube-client-name': '1',   // window.yt.config_
            'x-youtube-client-version': '2.20190319',
            'connection': 'keep-alive'
        },
        agent,
    })
    .on('response', (res) => {
        console.log(res.headers);
        res.pipe(ws, {
            end: false,
        });

        res.connection.on('close', () => {
            ws.end();
        })
    })
    .on('error', (err) => {
        console.log(err);
    })
    
    client.end();
}

search('');
