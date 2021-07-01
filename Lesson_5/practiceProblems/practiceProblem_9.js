/* Given the following data structure, return a new array with the 
same structure, but with the values in each subarray ordered -- 
alphabetically or numerically as appropriate -- in ascending order.

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

*/

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

console.log(arr);

function orderSubArray(arr) {
  let tempArr = [];

  arr.forEach(element => {
    let temp = element.sort();
    tempArr.push(temp);
  });

  return tempArr;
}

let newArr = orderSubArray(arr);

console.log(newArr);