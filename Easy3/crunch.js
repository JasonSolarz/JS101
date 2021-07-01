/* Write a function that takes a string argument and returns a new 
string that contains the value of the original string with all 
consecutive duplicate characters collapsed into a single character.
*/

function crunch(string) {
  let newString = "";
  string.split('').forEach((char, index) => {
    if (char !== string[index-1]) {
      newString += char;
    }
  });

  return newString;
}

console.log(crunch("ddaaiillyy ddoouubbllee"));
console.log(crunch('ggggggggggggggg'));
console.log(crunch(""));