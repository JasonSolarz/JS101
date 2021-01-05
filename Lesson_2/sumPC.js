/*a function that returns the sum of two numbers 

**Casual PseudoCode**

Take two numbers
Add them together
Return the sum

**Formal PseudoCode**

START

# Given two integers called num1 and num2

SET sum = num1 + num2
RETURN sum

END


**CODE** */

function add(num1, num2) {
  let sum = Number(num1) + Number(num2);
  return sum;
}

console.log(add(5, 5));