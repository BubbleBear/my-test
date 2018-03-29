async function asyncFunc() {
  console.log(1);
  return Promise.resolve(123);
  // return Promise.reject(new Error('Problem!'));
  //  throw new Error('Problem!');
}

const a = asyncFunc();
console.log(a);

// a.then((val) => {
//   console.log('val', val);
// }, (err) => {
//   console.log(err);
// });

console.log('second', a);