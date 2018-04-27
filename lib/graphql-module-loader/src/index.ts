import { Scanner } from 'directory-scanner';
import * as fs from 'fs';
import * as path from 'path';

const scanner = new Scanner();

scanner.fileHandler = (o, fn, fp) => {
    const extname = path.extname(fn);
    if (extname == '.schema') {
        o[fn] = fs.readFileSync(fp).toString();
    }
}

const schemaLoader = function (dirRealPath) {
    const res = scanner.scan(dirRealPath);
    console.log(res)
}

schemaLoader(path.resolve(__dirname, '../test'));

export { schemaLoader };
