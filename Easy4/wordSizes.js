/* Letter Counter (Part 1)

Write a function that takes a string consisting of zero or more space 
separated words and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

Break the problem down:
  1. Create a function that has an argument of string.
  2. Declare an empty object to hold word sizes.
  3. Convert that string into an array, split by spaces.
  4. Count the length of each word in the array using length.
  5. Add that length to the object
*/

function wordSizes(string) {
  let wordSize = {};
  let wordsArray = string.split(" ");

  wordsArray.forEach(word => {
    if (!!wordSize[word.length]) {
      wordSize[word.length] += 1;
    } else if (word.length !== 0) {
      wordSize[word.length] = 1;
    }
  })
  return wordSize;
}

console.log(wordSizes("Four score and seven."));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));