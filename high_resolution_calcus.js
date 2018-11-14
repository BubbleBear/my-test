function multiply(a, b) {
    a = num2arr(a).reverse();
    b = num2arr(b).reverse();

    const ap = point(a);
    const bp = point(b);

    ap && a.splice(ap, 1);
    bp && b.splice(bp, 1);

    let c = ['0'];

    for (let i = 0; i < a.length; i++) {
        const tmp = _multiply(b, a[i]).reverse().join('');
        c[i] = sum(parseInt(c[i]), parseInt(tmp)).toString();
        c.push(c[i].slice(0, -1) || '0');
        c[i] = c[i].slice(-1);
    }

    c = Array.from(c.join(''));
    c.splice(ap + bp, 0, '.');
    return c.reverse().join('');
}

function _multiply(revArrNum, oneBitNum) {
    if (!Number(oneBitNum)) {
        return null;
    }

    let a = revArrNum;
    let b = oneBitNum;

    let c = ['0'];

    for (let i = 0; i < a.length; i++) {
        c[i] = (parseInt(a[i]) * parseInt(b) + parseInt(c[i])).toString();
        c.push(c[i].slice(0, -1) || '0');
        c[i] = c[i].slice(-1);
    }

    return c;
}

function point(n) {
    return n.find(v => v === '.') && n.findIndex(v => v === '.') || 0;
}

// should be replaced with high resolution sum
function sum(a, b) {
    return a + b;
}

function num2arr(n) {
    const num = Number(n);

    if (num) {
        return Array.from(num.toString());
    }

    return null;
}

const a = 9999;
const b = 0.9;

const c = multiply(a, b);

console.log(c);
