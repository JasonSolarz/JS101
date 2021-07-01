/* Consider the following nested object:

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

Compute and display the total age of the male members of the family.

*/

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};


let totalAge = Object.entries(munsters).reduce((total, person) => {
  if (person[1].gender === "male") {
    total += person[1].age;
  }
  return total;
}, 0);

console.log(`Total Age: ${totalAge}`);
