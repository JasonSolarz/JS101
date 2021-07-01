//Question:
//What will the following code output?

console.log(false == '0');
console.log(false === '0');

//Answer:
//false == "0" will return true. As "0" is implicitly coerced into a 0.
//false === ")" will return false. === is a strict comparison, so ")" is not
//implicity coerced.