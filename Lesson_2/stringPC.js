/* a function that takes an array of strings, and returns a string that is all those strings concatenated together 

**Casual Pseudocode**

Take a collection of strings.

Create an empty string variable

Iterate through the collectoin one by one.
  - for each iteration, add the element to the new empty string variable

After iterating through the collection, return the saved string.

**Formal Pseudocode**

START

# Given a collection of strings called strArr

SET newString = ""
SET iterator = 0;

WHILE iterator < length of collection
  SET newString += currentString

PRINT newString

END

**CODE ** */

function createString(strArr) {
  let newString = "";
  for(let lcv = 0; lcv < strArr.length; lcv++) {
    newString += strArr[lcv];
  }

  return newString;
}

let strArr = ["One", "Two", "Three", "Four", "Five"];

console.log(createString(strArr));
