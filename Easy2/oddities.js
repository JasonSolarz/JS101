/* Write a function that returns an Array that contains every other
element of an Array that is passed in as an argument. The values in
the returned list should be those values that are in the 1st, 3rd,
5th, and so on elements of the argument Array.

*/

function oddities(arr) {
  let tempArr = [];
  for (let lcv = 0; lcv < arr.length; lcv += 2) {
    tempArr.push(arr[lcv]);
  }
  return tempArr;
}

console.log(oddities([2, 3, 4, 5, 6])); // [ 2, 4, 6 ]
console.log(oddities([1, 2, 3, 4, 5, 6])); // [ 1, 3, 5 ]
console.log(oddities(["abc", "def"])); // [ "abc" ]
console.log(oddities([123])); // [ "123" ]
console.log(oddities([])); // []