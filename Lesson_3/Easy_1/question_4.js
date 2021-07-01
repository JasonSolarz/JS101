//Question:
//Using the following string, create a new string that contains all
//lowercase letters except for the first character, which should
//be capitalized. (See the example output.)

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

let newStr = munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();

console.log(newStr);

//substring() returns part of the string between the start and the end
//of the indexes, or to the end of the string.