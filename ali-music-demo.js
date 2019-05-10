const https = require('https');

// const cookie = [
//     'xm_sg_tk=4657f42b20cabfd7aceec7cb5ea0a007_1553763099673',
//     'xm_sg_tk.sig=PhFKEFwhN6EvrrJ43u2C1Cpd-MTSX1gaOapQ-wT1j08',
// ].join('; ');

const cookie = 'xmgid=e83eb8cb-e750-41ac-a9b2-72a3bc22db53; _uab_collina=155305095609087476436369; cna=xLHVFOvpc0QCAXTiSMjXxpDd; gid=155305532950796; _unsign_token=49f47b67ef9232e8c9ca7407aec4aa35; UM_distinctid=169994fb658138-0f31f3d7c42818-36677905-1fa400-169994fb65944; PHPSESSID=3e1176703e5092e853f8899b6081c85c; CNZZDATA921634=cnzz_eid%3D966925925-1553052293-%26ntime%3D1553052293; CNZZDATA2629111=cnzz_eid%3D1438557232-1553051910-%26ntime%3D1553051910; xm_sg_tk=57792cbf71d0afb37f887208e4213286_1554802175303; xm_sg_tk.sig=-1giv0DRLV7-iTcHM1qUoONq2vtPKRKGrsbtBAZ1yMo; _xm_umtoken=T5A589EC4CB56C701875266763B6076B124DF1BA752AE77A93DAFC4C4D8; _xiamitoken=22fe8c33f7652c4cf9da0f81b5c5f20d; x5sec=7b22617365727665723b32223a223136323761373538366163646531376133663334633437613131646262613735434e725473655546454a4458374c65447536536f47773d3d227d; l=bBaScLlIvoUcet53BOfgmuIRhKbTnCOfcsPzw4wGhIB19BjuQdBfNBwpk3hWo3Q_K_fwmC-yeLSRQRUHSCzZw; isg=BKioK9vjYOf32Uxev5g5I04ueZB6eQaJRzdzJmLc_iMPvUEnM-LcaxI7tR3ojcSz'

function search(songname, cookie) {
    const path = encodeURI('/api/search/searchSongs?_q={"key":"安妮的仙境","pagingVO":{"page":1,"pageSize":60}}&_s=38c81becaa2c420274bcfd357eaa0e6a');

    const client = https.request({
        host: 'www.xiami.com',
        path,
        method: 'GET',
        headers: {
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
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
    + '{"key":"安妮的仙境","pagingVO":{"page":1,"pageSize":60}}'

const md5 = require('js-md5');

const _s = md5(raw)

search('', cookie);
