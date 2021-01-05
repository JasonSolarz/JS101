/* a function that takes an array of integers, and returns a new array with every other element 

**Casual Pseudocode**

Given a collection of numbers.

Create a new empty array

Iterate through the collection by every other
  - add the first element to a new array
  - for each other element, save element to the new array

After iterating through the collection, return the new array

**Formal Pseudocode**

START

#Given a collection of numbers

SET newArray = []
SET iterator = 0;

WHILE iterator < length of numbers
  newArray += currentElement
  iterator = iterator + 2

PRINT newArray

**CODE**

*/

function everyOther(numbers) {
  let newArray = [];

  for(let lcv = 0; lcv < numbers.length; lcv+=2) {
    newArray.push(numbers[lcv]);
  }

  return newArray;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(everyOther(numbers)); // [1, 3, 5, 7, 9 ]

