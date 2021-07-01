/* Write three different ways to remove all of the elements from the following array: */

let numbers = [1, 2, 3, 4];
console.log(numbers);

numbers.splice(0, numbers.length);
console.log(numbers);

numbers = [1, 2, 3, 4];
console.log(numbers);

while(numbers.length > 0) {
  numbers.pop();
}

console.log(numbers);

numbers = [1, 2, 3, 4];
console.log(numbers);

while(numbers.length > 0) {
  numbers.shift();
}

console.log(numbers);

numbers = [1, 2, 3, 4];
console.log(numbers);

numbers.length = 0;

console.log(numbers);