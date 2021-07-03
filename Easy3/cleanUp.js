/* Clean up the words

Given a string that consists of some words and an assortment of non-alphabetic 
characters, write a function that returns that string with all of the non-alphabetic 
characters replaced by spaces. If one or more non-alphabetic characters occur in a 
row, you should only have one space in the result (i.e., the result string should 
  never have consecutive spaces).
*/

function cleanUp(text) {
  let newString = "";

  for (let i = 0; i < text.length; i++) {
    if ((text[i] >= "a") && (text[i] <= "z")) {
      newString += text[i];
    } else if ((text[i] >= "A") && (text[i] <= "Z")) {
      newString += text[i];
    } else if (newString[newString.length - 1] !== " ") {
      newString += " ";
    }
  }
 
  return newString;
}

console.log(cleanUp("---what's my +*& line?"));