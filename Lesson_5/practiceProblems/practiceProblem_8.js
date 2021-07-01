/* Using the forEach method, write some code to output all vowels 
from the strings in the arrays. Don't use a for or while loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

List of Vowels: a, e, i, o, u

*/

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let arr = Object.values(obj).toString().split('');

arr.forEach(letter => {
  if(letter.match(/[aeiou]/gi)) {
    console.log(letter.match(/[aeiou]/gi).toString());
  }
});