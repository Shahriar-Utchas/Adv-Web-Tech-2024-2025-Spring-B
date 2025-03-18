//let-var-const
// var example
var x = 10;
if (true) {
  var x = 20; // Same variable due to function or global scope
}
console.log(x); // Output: 20

// let example
let y = 10;
if (true) {
  let y = 20; // Block-scoped variable, different from the outer one
}
console.log(y); // Output: 10

// const example
const z = 30;
console.log(z); // Output: 30

// Trying to reassign a const variable will throw an error
//z = 40;  // Error: Assignment to constant variable
// console.log(z);
