function findFibonacciIndexByLength(num) {
  if (num <= 1) return 1;

  return findFibonacciIndexByLength(num - 1) + findFibonacciIndexByLength(num -2);
}

console.log(findFibonacciIndexByLength(2n));