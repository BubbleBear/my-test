const Pro = require('bluebird');

const r = new Pro((resolve, reject) => {
    setTimeout(() => {
        resolve('hmmm');
    }, 500);
});

const s = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ssss');
    }, 500);
});

async function k() {
    const t = await s;
    console.log(t);
}

k();
