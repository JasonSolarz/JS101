/* Double Doubles

A double number is an even-length number whose left-side digits are exactly 
the same as its right-side digits. For example, 44, 3333, 103103, and 7676 
are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied 
by two, unless the argument is a double number; otherwise, return the double 
number as-is.

*/

function twice(num) {
  let str = num.toString();

  if (str.length % 2 === 1) {
    return num * 2;
  } else {
    let firstHalf = str.slice(0, str.length / 2);
    let secondHalf = str.slice(str.length / 2);
    if (firstHalf === secondHalf) {
      return num;
    } else {
      return num * 2;
    }
  }


}

console.log(twice(37));
console.log(twice(44));
console.log(twice(334433));
console.log(twice(444));
console.log(twice(107));
console.log(twice(103103));
console.log(twice(3333));
console.log(twice(7676));
console.log(twice(7777677776));
