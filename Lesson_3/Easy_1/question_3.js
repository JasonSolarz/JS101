//Question:
//Determine whether the following object of people and their
//age contains an entry for 'Spot':

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

//Answer:
//Object has a build in method called hasOwnProperty(). This method returns
//a boolean indicating whether the object has the specified property as its
//own property.

console.log(ages.hasOwnProperty("Spot"));