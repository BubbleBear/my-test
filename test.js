const date = new Date();

const parsed = Date.parse('2018-05-22' + ' 00:00:00');
console.log(parsed)


console.log(date.setTime(Date.parse('2018-05-22' + ' 00:00:00') + 1) && date.toLocaleString());
