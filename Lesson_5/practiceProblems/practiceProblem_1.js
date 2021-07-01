/* How would you order the following array of number strings by descending 
numeric value (largest number value to smallest)?

let arr = ['10', '11', '9', '7', '8'];

*/

let arr = ['10', '11', '9', '7', '8'];

function reverseSortArray(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(reverseSortArray(arr));
console.log(reverseSortArray([9,8,7,6,5,4,3]));