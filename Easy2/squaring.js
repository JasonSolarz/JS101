/* Using the multiply() function from the "Multiplying Two Numbers" problem, 
write a function that computes the square of its argument 
(the square is the result of multiplying a number by itself).

Break the problem down:

1. Create square function that accepts one integer argument
2. Place the multiply function inside the square function, and pass the integer to both 
arguments. 
3. Return the squared value.

*/
function multiply(num1, num2) {
  return num1 * num2;
}
function square(num1) {
  return multiply(num1, num1);
}

console.log(square(5) === 25);
console.log(square(-8) === 64);