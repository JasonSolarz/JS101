/* Letter Counter (Part 2)

Modify the wordSizes function from the previous exercise to exclude 
non-letters when determining word size. For instance, the word size 
of "it's" is 3, not 4.
*/

function wordSizes(string) {
  let wordSize = {};
  let regEx = /[^a-zA-Z\s]/gi;
  let wordsArray = string.replace(regEx, "").split(" ");


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