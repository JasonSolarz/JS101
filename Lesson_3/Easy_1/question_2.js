//Question:
//How can you determine whether a given string ends with an
//exclamation mark (!)?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

//Answer:
//String has a built in method called endsWith(). You can use this method
//to determine what the string ends with.

console.log(str1.endsWith("!")); // true
console.log(str2.endsWith("!")); // false