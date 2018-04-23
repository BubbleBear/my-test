const cp = require('child_process');

// for (i = 0; i < 100; i++) {
//     const res = cp.execFileSync('node', ['./test.js']);
//     console.log(res.toString());
// }

let i = 0;

function hmm() {
    cp.execFile('node', ['./test.js'], (err, stdout, stderr) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(stdout);
        i < 100 && hmm();
    });
}

hmm();
