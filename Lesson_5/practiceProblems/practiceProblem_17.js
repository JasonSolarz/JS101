/* Write a function that takes no arguments and returns a string that contains a UUID.

Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f) 
represented as a string. The value is typically broken into 5 sections in an 8-4-4-4-12 
pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

Break it down:

1. Define the possible digits.
2. define the size (32 hexadecimal characters) in an multi-dimenional array with a
8-4-4-4-12 patter. 
3. Define a functiont that iterates through the data structure, assigning a random
character to the element.
4. Once complete, return a string with the file result.

*/

function createUUID() {
  let characters = "0123456789abcdef";
  let template = [['','','','','','','',''],
              ['','','',''],
              ['','','',''],
              ['','','','','','','','','','','','']];
  let UUID = "";

  template.forEach((subArr, index) => {
    subArr.forEach((char, ind) => {
      let randNum = Math.floor(Math.random() * characters.length);
      let randChar = characters[randNum];
      UUID += randChar;

    });
    UUID += "-";
  });

  

  return UUID.slice(0, UUID.length - 1);
}

console.log(createUUID());


function tryTwo() {
  let characters = "0123456789abcdef";
  let template = [8, 4, 4, 12];
  let UUID = "";

  for(let i = 0; i < template.length; i++) {
    for(let n = 0; n < template[i]; n++) {
      let randNum = Math.floor(Math.random() * characters.length);
      let randChar = characters[randNum];
      UUID += randChar;
    }

    UUID += "-";
  }

  return UUID.slice(0, UUID.length - 1);
}

console.log(tryTwo());