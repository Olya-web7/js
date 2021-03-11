//get through array without any for/while, map, forEach, reduce, etc. functions. You can only use getting element of an array by it's index and getting array's length, self-made functions.

const arr = ["1", "2", "3"];
let i = 0;
function getThrough(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    ++i;
    getThrough(arr);
  }
}
getThrough(arr);
