/* One of the most frequently used real-world string operations is that of 
"string substitution," where we take a hard-coded string and modify it with 
various parameters from our program.

Given this previously seen family object, print the name, age, and gender of 
each family member:

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

Each output line should follow this pattern:

(Name) is a (age)-year-old (male or female).

*/

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

let arr = Object.entries(munsters);

arr.forEach(munster => {
  console.log(`${munster[0].toString()} is a ${munster[1].age}-year old ${munster[1].gender}`);
})