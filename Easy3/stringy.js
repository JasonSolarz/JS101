/* Write a function that takes one argument, a positive integer, 
and returns a string of alternating '1's and '0's, always starting 
with a '1'. The length of the string should match the given integer.

*/

function stringy(number) {
  let newString = "";

  for(let i = 0; i < number; i++) {
    if ((i % 2) === 0) {
      newString += "1";
    } else {
      newString += "0";
    }
  }

  return newString;
}

console.log(stringy(6));
console.log(stringy(9));
console.log(stringy(4));
console.log(stringy(7));