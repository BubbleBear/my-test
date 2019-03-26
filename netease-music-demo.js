const https = require('https');

const postData = [
    `params=${encodeURIComponent('IkpJvRDrhwsdfGUzy+h/PqzsumGT6baP9RcwZVFdP4XI7H+TQSGd8Z5CMQIcED1qzyuWrqv9kYKvHc9Is9zN/ZwwhVj3AAxrdtiLG0iSQhACaWUxE1PQdR27Pi7zz4FSrcODaC0t2iFuLhfgHHjZT0f+UOctp93P2f2W3gifsd5tt1Dp+8YzuX8aZDHqfvgv7JIbpDU1zLmn8kLujLxCa3bIgyiwLBtZIWtC+z+hll/iXSMcMwgcvPQWLgJVVy/vpkS6Jixm2la/5MTNdNbcJQ==')}`,
    `encSecKey=${encodeURIComponent("81e901962c7a6aef2d2eb4a9a952c83a64126d4fd57fafa5801664c2edb1db626f49239145b4438ced809fc83503b5074baba3ab6bfaf256df73f18bd0ed907cbbd7e51679f9404806a204e8fbff6dea61c8d6e9eb22ff5a64dac4fee720841a449482a1c499683fdf35ad48b38d03043fc31d129b7d42a800eba7aef859c858")}`,
].join('&');

const client = https.request({
    host: 'music.163.com',
    path: '/weapi/cloudsearch/get/web?csrf_token=',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
})
.on('response', (res) => {
    res.pipe(process.stdout);
});

client.write(postData);
client.end();
