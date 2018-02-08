const fs = require('fs');
const https = require('https');

const ws = fs.createWriteStream('tmp.jpg', {
    flags: 'w', // 覆盖写，a是添加在文件末尾，具体看文档,
})

const req = https.request('https://pic1.zhimg.com/v2-28e0b2a9be0d2aa71556c7031077272d_xl.jpg', (res) => {
    res.pipe(ws);
})

req.end();
