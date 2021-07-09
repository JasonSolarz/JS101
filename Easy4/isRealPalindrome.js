/* Real Palindromic Strings

Write another function that returns true if the string passed as an argument is a 
palindrome, or false otherwise. This time, however, your function should be 
case-insensitive, and should ignore all non-alphanumeric characters. If you wish, 
you may simplify things by calling the isPalindrome function you wrote in the 
previous exercise.

Break it down:
  1. Create a function that takes a string as an argument
  2. Convert the passed string into a lowercase tempArray using RegEx split(). 
  3. Create a new string in reverse using the tempArray.
  3. Compare strings
*/

function isRealPalindrom(string) {
  let regEx = /[a-zA-Z0-9]/gi;
  let newString = string.toLowerCase().match(regEx).join("");
  
  return newString === newString.split("").reverse().join("");
}

console.log(isRealPalindrom("madam"));
console.log(isRealPalindrom("Madam"));
console.log(isRealPalindrom("Madam, I'm Adam"));
console.log(isRealPalindrom("356653"));
console.log(isRealPalindrom("356a653"));
console.log(isRealPalindrom("123ab321"));