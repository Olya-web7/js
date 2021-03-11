let arr = [
  { a: 1, b: 2 },
  { a: 2, c: 3 },
  { a: 1, b: 2 },
];

var result = arr.filter(
  (v, i, a) => a.findIndex((t) => JSON.stringify(t) === JSON.stringify(v)) === i
);
console.log(result);

// var result = arr.reduce((unique, o) => {
//   if (!unique.some((obj) => obj.a === o.a && obj.b === o.b)) {
//     unique.push(o);
//   }
//   return unique;
// }, []);
// console.log(result);
