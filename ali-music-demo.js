const https = require('https');

const cookie = [
    'xm_sg_tk=213578a0870b3e8a6255c2141c9eae17_1553157981334',
    'xm_sg_tk.sig=XzdcNC4rHr5xsOeuyQwlbiJqGT4Ui1H4lRFfOKKNBz8',
].join('; ');

function search(songname, cookie) {
    const path = '/api/search/searchSongs?_q=%7B%22key%22:%22asdfasdfasdf%22,%22pagingVO%22:%7B%22page%22:1,%22pageSize%22:60%7D%7D&_s=d725d2b3ad93dbc2ad6e8d00f212baf0';

    const client = https.request({
        host: 'www.xiami.com',
        path,
        method: 'GET',
        headers: {
            cookie,
        },
    })
    .on('response', (res) => {
        console.log(res.headers);
        res.pipe(process.stdout);
    })
    .on('error', (err) => {
        console.log(err);
    })
    
    client.end();
}

const n = cookie.match(/(?:^|;\s*)xm_sg_tk=([^;]*)/)[1];
const a = n.split('_')[0];

const raw = a + "_xmMain_" + '/api/search/searchSongs' + '_'
    + '{"key":"asdfasdfasdf","pagingVO":{"page":1,"pageSize":60}}'

const md5 = require('js-md5');

const _s = md5(raw)

console.log(_s)


'_s=d725d2b3ad93dbc2ad6e8d00f212baf0'
