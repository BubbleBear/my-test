function Promise(fn) {
    var callback;

    this.then = function(done) {
        callback = done;

        return new Promise((cb) => {
            cb()
        })
    }

    function resolve(v) {
        setTimeout(() => {callback && callback(v)});
    }

    fn(resolve);
}

console.log('a')

new Promise((cb) => {
    cb(2);
    console.log(1);
}).then((v) => {
    console.log(v);
}).then((v) => {
    console.log(3);
})

console.log('b')
