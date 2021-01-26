function multiply(numOne, numTwo) {
  return numOne * numTwo;
}

function square(numSqr) {
  return multiply(numSqr, numSqr);
}

console.log(square(5) === 25);
console.log(square(-8) === 64);