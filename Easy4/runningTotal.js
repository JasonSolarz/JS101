/* Running Totals

Write a function that takes an array of numbers and returns an array with 
the same number of elements, but with each element's value being the running 
total from the original array.

*/

function runningTotal(arrayOfNumbers) {
  let newArrayOfNumbers = arrayOfNumbers; 
  newArrayOfNumbers.forEach((number, index) => {
    if (index !== 0) {
      newArrayOfNumbers[index] = newArrayOfNumbers[index] + newArrayOfNumbers[index - 1];
    } 
  });

  return newArrayOfNumbers;
}

console.log(runningTotal([2, 5, 13]));
console.log(runningTotal([14, 11, 7, 15, 20]));
console.log([3]);
console.log([])