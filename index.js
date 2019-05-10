function isChinese(str) {
    var patrn = /[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi;
    if (!patrn.exec(str)) {
        return false;
    } else {
        return true;
    }
}

const a = isChinese('asdf');
const b = isChinese('asdf阿舒服点asdf');
const c = isChinese('阿斯顿发');
const d = isChinese('盧壹');

console.log(a, b, c, d);
