//Rest Operator
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(5, 10)); // Output: 15

// Array destructuring with rest
const arr = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

// Object destructuring with rest
const person = { name: "Shahriar", age: 25, job: "Engineer" };
const { name, ...otherDetails } = person;
console.log(name); // Output: Shahriar
console.log(otherDetails); // Output: { age: 25, job: 'Engineer' }

//Spread Operator
// Spread in arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combining arrays
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

// Copying an array
const copiedArray = [...arr1];
console.log(copiedArray); // Output: [1, 2, 3]

// Spread in objects
const person2 = { name: "Utchas", age: 25 };
const updatedPerson = { ...person2, job: "Engineer" };
console.log(updatedPerson); // Output: { name: 'Utchas', age: 25, job: 'Engineer' }

// Cloning an object
const personCopy = { ...person2 };
console.log(personCopy); // Output: { name: 'Utchas', age: 25 }
