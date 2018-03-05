setTimeout(() => {
    console.log(1);

    setTimeout(() => {
        console.log(3);
    });

    const t = process.hrtime();
    while(process.hrtime(t)[0] < 2);

    process.nextTick(() => {
        console.log(4);
    });
}, 1);

setTimeout(() => {
    console.log(2)
}, 2);