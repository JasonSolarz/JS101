/* Write a function named xor that takes two arguments, and returns true
if exactly one of its arguments is truthy, false otherwise. Note that we are
looking for a boolean result instead of a truth/false value as return by || and
&&

*/

function xor(arg1, arg2) {
  if (arg1 && arg2) {
    return false;
  } else if ((arg1) && (!arg2)) {
    return true;
  } else if ((!arg1) && (arg2)) {
    return true;
  } else {
    return false;
  }
}

console.log(xor(5, 0));
console.log(xor(false, true));
console.log(xor(1, 1));
console.log(xor(true, true));