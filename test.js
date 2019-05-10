const util = require('util');

class A {
    async a() {
        return new Promise((resolve, reject) => {
            resolve(new B);
        });
    }

    
}

class B {
    async b() {
        return new Promise((resolve, reject) => {
            resolve(new A);
        });
    }
}

function proxy(target) {
    // console.log('target: ', target);
    const agent = new Proxy(target, {
        get(t, key, p) {
            // console.log('key ', key);

            if (key === util.inspect.custom) {
                return t;
            }

            if (t instanceof Promise) {
                if (t[key] !== undefined) {
                    return t[key].bind(t);
                } else {
                    return () => proxy(t.then((result) => {
                        console.log('result: ', result)
                        const v = result[key].call(result);

                        console.log('v: ', v);
                        return v;
                    }));
                }
            } else {
                const value = t[key].bind(t);
                // console.log('value(): ', value());

                const vr = value();

                return () => proxy(vr);
            }
        },
    });

    return agent;
}

!async function() {
    const pa = proxy(new A);

    const a = new A;

    const rpa = await pa.a().b().a().b();

    const ra = (await a.a()).b();

    console.log('~~~~~~~~~~~~~~~~~~~~~~')

    console.log('AAAAAAA', rpa);

    // const b = a.b;

    // console.log(a);

    // console.log('a: ', a)
}()
