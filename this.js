const proto = {
    a: function() {
        console.log(this);
    },

    b: () => {
        console.log(this);
    },
};

function p(a) {
    const p = Object.getPrototypeOf(a)
    console.log(p)
    return p;
}

function a() {
    const a = proto;
    const b = Object.create(proto);

    a.c = 1;
    b.c = 1;

    a.a();
    a.b();

    b.a();
    b.b();

    console.log('#########################')

    const c = Object.create(b);

    p(a)
    p(b)
    const d = p(c)
    console.log('***************************')
    p(p(p(d)))
}

a()
