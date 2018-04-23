const Redis = require('ioredis');
const redis = new Redis();
const Pro = require('bluebird');

(async () => {
    await redis.del('?');
    await redis.set('c?', 0);
    while (await redis.incr('c?') <= 100) {
        const r = await redis.rpush('?', 1);
    }
    // setTimeout(async () => {
    //     const l = await redis.llen('?');
    //     console.log(l);
    //     redis.disconnect();
    // }, 500);
    const l = await redis.llen('?');
    console.log(l);
    redis.disconnect();
})()
