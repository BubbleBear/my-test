const data = require('./data');

function traverseObject(obj) {
    let res;
    if (Array.isArray(obj)) {
        res = obj.map(v => traverseObject(v));
    } else if (typeof obj == 'object') {
        res = {};
        Reflect.ownKeys(obj).map(k => {
            res[handler(k)] = traverseObject(obj[k]);
        });
    } else {
        res = obj;
    }
    return res;
}

function handler(str) {
    return str.
      replace('-', '_').
      split('').
      reduce(function (a, b) {
        let p = /[a-z]/.test(a[a.length - 1]) && /[A-Z]/.test(b);
        if (p) {
          return a + '_' + b;
        } else {
          return a + b;
        }
      }).
      toLowerCase();
}

const res = traverseObject(data)
console.log(res)
