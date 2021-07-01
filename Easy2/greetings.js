/*Create a function that takes 2 arguments, an array and an Object. The array will contain 
2 or more elements that, when combined with adjoining spaces, will produce a person's name.
The object will contain two keys, "title" and "occupation", and the appropriate values.
Your function should return a greeting that uses the person's full name, and mentions the
person's title */

/*Break this project down into peices:

1. Create a function that takes 2 arguments, an array and an Object.
2. Array will contain 2 or more elements, that when combined will produce a person's name.
3. Object will contain two keys, title and occupation.
4. function should return a greeting that uses full and and title. 

*/

function greeting (name, status) {
  return `Hello, ${name.join(" ")}! Nice to have a ${Object.values(status).join(" ")} around.`;
}

console.log(greeting(["Agent", "Smith"], { title: "Master", occupation: "Virus"}));