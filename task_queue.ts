export class TaskQueue {

    taskQueue: Array<any> = [];

    options;

    results: Array<any> = [];

    constructor(options = {
        batchSize: 20,
    }) {
        this.options = options;
    }

    public async schedule() {
        const partialTasks = this.shift(this.options.batchSize);

        if (partialTasks.length) {
            const partialResults = await Promise.all(partialTasks.map(async task => {
                return await task();
            }));

            this.results.splice(this.results.length, 0, ...partialResults);

            await this.schedule();
        }

        return this.results;
    }

    public start() {
        ;
    }

    public push(...tasks) {
        tasks.forEach(task => {
            this.taskQueue.push(task);
        })

        return this.taskQueue.length;
    }

    public unshift(...tasks) {
        tasks.forEach(task => {
            this.taskQueue.unshift(task);
        })

        return this.taskQueue.length;
    }

    public pop(length = 1) {
        const res = [];

        for (let i = 0; i < length && this.taskQueue.length > 0; i++) {
            res.push(this.taskQueue.pop());
        }

        return res;
    }

    public shift(length = 1) {
        const res = [];

        for (let i = 0; i < length && this.taskQueue.length > 0; i++) {
            res.push(this.taskQueue.shift());
        }

        return res;
    }
}

async function test() {
    const tq = new TaskQueue({
        batchSize: 2,
    });
    
    tq.push(...new Array(10).fill(() => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('ok');
            }, 1000);
        })
    }));

    const res = await tq.schedule();
}

test();
