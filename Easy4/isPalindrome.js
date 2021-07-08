/* Palindromic Strings
Write a function that returns true if the string passed as an argument is a 
palindrome, or false otherwise. A palindrome reads the same forwards and 
backwards. For this problem, the case matters and all characters matter.

Break it down:
  1. Create a function that takes a string as an argument
  2. Convert the passed string into a tempArray. 
  3. Create a new string in reverse using the tempArray.
  3. Compare strings
*/

function isPalindrome(str) {
  let tempArray = str.split("");
  let newString = "";

  for (let i = tempArray.length - 1; i >= 0; i--) {
    newString += tempArray[i];
  }

  if (str === newString) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("Madam"));
console.log(isPalindrome("madam i'm adam"));
console.log(isPalindrome("356653"));


/* LS Solution:

function isPalindrome(string) {
  return string === string.split("").reverse().join("");
}
*/