/* Starting with the string: let famousWords = "seven years ago...";
show two different ways to put the expected "Four score and " in front of it. */

let famouseWords = "seven years ago...";
let str1 = "Four score and";

console.log(str1.concat(" ", famouseWords));
console.log(str1 + " " + famouseWords);
console.log("Four score and ".concat(famouseWords));