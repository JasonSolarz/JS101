/* Palindromic Numbers

Write a function that returns true if its integer argument is palindromic, 
or false otherwise. A palindromic number reads the same forwards and backwards.

*/

function isPalindromicNumber(number) {
  
  return number=== Number(number.toString().split("").reverse().join(""));
}

console.log(isPalindromicNumber(34543));
console.log(isPalindromicNumber(123210));
console.log(isPalindromicNumber(22));
console.log(isPalindromicNumber(5));