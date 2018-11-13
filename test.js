function camelize(str) {
    return str.replace(/[-_][a-z]/ig, val => {
        return val.slice(1, 2).toUpperCase();
    });
}

const x = [
    'asdf_asdf',
    'asdfAsdf',
    '_',
    '',
    'asdf-_asdf',
    'asdf_asdf-asdf',
];

x.forEach(v => {
    console.log(camelize(v));
    // camelize(v);
});
