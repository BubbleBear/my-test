const cp = require('child_process');

cp.execFile('node', ['./test.js'], (err, stdout, stderr) => {
    console.log(stdout);
});
