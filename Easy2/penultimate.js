/* Write a function that returns the next to last word
in a string passed to it as an argument.

Words are any sequence of non-blank characters.

You may assume that the input string will always contain at least two words

*/

const READLINE = require("readline-sync");

function penultimate(str) {
  let tempArr = str.split(' ');
  return tempArr[tempArr.length - 2];

}

let userInput = READLINE.question("Please enter a sentence(2 words or more): ");

console.log(penultimate(userInput));