export interface Box {
    index: number;
    list: any[];
}

export function combine(src: any[][]) {
    const wrapped: Box[] = src.map(list => ({
        index: 0,
        list,
    }));
    const stack: Box[] = [];
    const result: any[][] = [];
    const doneMark = Array(src.length).fill(false);

    while (true) {
        const subResult: any[] = stack.reduce((acc, cur) => {
            acc.push(cur.list[cur.index]);

            return acc;
        }, []);

        while (wrapped.length) {
            const cache = wrapped.shift();
        
            if (cache.index < cache.list.length) {
                subResult.push(cache.list[cache.index]);
            } else {
                ;
            }

            stack.push(cache);
        }

        result.push(subResult);

        while (stack.length) {
            const cache = stack.pop();

            if (cache.index + 1 < cache.list.length) {
                cache.index++;
                wrapped.unshift(cache);
                break;
            } else {
                cache.index = 0;
                wrapped.unshift(cache);
                doneMark[stack.length] = true;
            }
        }

        const done = doneMark.reduce((acc, cur) => acc & cur, true);

        if (done) {
            break;
        }
    }

    return result;
}

if (require.main === module) {
    const test = [
        [ 1, 2, ],
        [ 3, 4, ],
        [ 5, 6, 7, ],
    ];

    const r = combine(test);

    console.log(r);
}
