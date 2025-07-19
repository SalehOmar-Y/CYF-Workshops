// Predict and explain... 
// What will be logged by this code? the output of the console. log would be:
// "Abdi" // "Shadi" // false // undefined // false // false // true. The reason for location being false is that person1 and person2 have different locations, and person3 is a reference to person2, so it reflects the change made to person2's location. The job property does not exist in person1, hence it logs undefined.
// Check your prediction and explanation by running the code.

const person1 = {
    "name": "Abdi",
    "location": "London",
    "id_number": 17,
};

const person2 = {
    "name": "Shadi",
    "job": "Software Engineer",
    "location": "London",
    "id_number": 28,
};

const person3 = person2;

person3.location = "Manchester";

console.log(person1.name);
console.log(person2["name"]);
console.log(person1.id_number > person2["id_number"]);
console.log(person1.job);
console.log(person1.location === person2.location);
console.log(person1.location === person3.location);
console.log(person2.location === person3.location);
