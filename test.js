const t = Buffer.from('abc');

const k = f(t)

function f(s) {
    return s.map((v) => {
        return 256 - v;
    })
}

console.log(f(k).toString())
