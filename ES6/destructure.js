const arr = [1, 2, 3, 4];

// Destructuring the array
const [a, b, c, d] = arr;

console.log(a); // Output: 1
console.log(b); // Output: 2

// Skipping the second and third elements
const [first, , , fourth] = arr;

console.log(first); // Output: 1
console.log(fourth); // Output: 4

// Destructuring an object
const person = {
  name: "Shahriar",
  age: 25,
  job: "Engineer",
};

// Destructuring the object
const { name, age, job: occupation } = person;

console.log(name); // Output: Shahriar
console.log(age); // Output: 25
console.log(occupation); // Output: Engineer
