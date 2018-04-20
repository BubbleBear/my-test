const Redis = require('ioredis');
const redis = new Redis();

(async () => {
    await redis.del('?');
    while (await redis.llen('?') < 100) {
        const r = await redis.rpush('?', 1);
    }
    setTimeout(async () => {
        const l = await redis.llen('?');
        console.log(l);
        redis.disconnect();
    }, 500);
})()
