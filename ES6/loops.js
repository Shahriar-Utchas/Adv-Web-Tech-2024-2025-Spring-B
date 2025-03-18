//forEach loop
const fruits = ["apple", "banana", "orange"];

fruits.forEach((fruit, index, array) => {
  console.log(`Index: ${index}, Fruit: ${fruit}`);
  console.log(array); // Output: ['apple', 'banana', 'orange'] for every iteration
});

// for-of loop--> for arrays
const colors = ["red", "blue", "green"];
for (const color of colors) {
  console.log(color); // Output: red blue green
}

// for-in loop--> for objects
const person = {
  name: "Alice",
  age: 25,
  job: "Engineer",
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`); // Output: name: Alice, age: 25, job: Engineer
}
