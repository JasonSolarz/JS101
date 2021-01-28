function evenities(arr) {
  let tempArr = [];
  let lcv = 0;
  while (lcv < arr.length) {
    if (lcv % 2 === 1) {
      tempArr.push(arr[lcv]);
    }
    lcv++;
  }
  return tempArr;
}

console.log(evenities([2, 3, 4, 5, 6])); // [ 3, 5 ]
console.log(evenities([1, 2, 3, 4, 5, 6])); // [2, 4, 6 ]
console.log(evenities(["abc", "def"])); // [ 'def' ]
console.log(evenities([123])); // []
console.log(evenities([])); // []