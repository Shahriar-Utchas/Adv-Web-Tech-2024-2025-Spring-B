// Arrow function example
// Arrow functions are a more concise way to write function expressions - they have no 'this', 'super', 'arguments', or 'new.target' bindings.
// Arrow functions do not have their own 'this'. The value of 'this' inside an arrow function is always inherited from the enclosing scope.

//Examples:
const add = (a, b) => {
  return a + b;
};
console.log(add(3, 4)); // Output: 7

//simplest arrow function example
const add1 = (a, b) => a + b;
console.log(add1(3, 4)); // Output: 7

// Regular function example
const person1 = {
  name: "Shahriar",
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};

person1.greet(); // Output: Hello, Shahriar

// Arrow function example (no own `this`, inherits from outer scope)
const person2 = {
  name: "Utchas",
  greet: () => {
    console.log(`Hello, ${this.name}`);
  },
};

person2.greet(); // Output: Hello, undefined (because `this` is not bound to person2 in arrow function)
