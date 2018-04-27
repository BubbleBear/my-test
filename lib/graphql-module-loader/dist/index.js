"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const directory_scanner_1 = require("directory-scanner");
const fs = require("fs");
const path = require("path");
const scanner = new directory_scanner_1.Scanner();
scanner.fileHandler = (o, fn, fp) => {
    const extname = path.extname(fn);
    if (extname == '.schema') {
        o[fn] = fs.readFileSync(fp).toString();
    }
};
const schemaLoader = function (dirRealPath) {
    const res = scanner.scan(dirRealPath);
    console.log(res);
};
exports.schemaLoader = schemaLoader;
schemaLoader(path.resolve(__dirname, '../test'));
