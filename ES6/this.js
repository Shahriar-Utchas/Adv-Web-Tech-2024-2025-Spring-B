// Implicit Binding: When a function is called as a method of an object,
// `this` refers to the object it is called on.
var person1 = {
  name: "utchas",
  age: 24,
};

var person2 = {
  name: "sai",
  age: 24,
};

var printName = function (obj) {
  obj.sayName = function () {
    console.log(this.name); // `this` refers to the object on which the method is called
  };
};

printName(person1); // Adds `sayName` method to person1
printName(person2); // Adds `sayName` method to person2
person1.sayName(); // Outputs: 'utchas'
person2.sayName(); // Outputs: 'sai'

// Explicit Binding: Using `call`, `apply`, or `bind` to explicitly set `this` context
var printNAme = function (v1, v2) {
  console.log(`This is ${this.name} no.1 ${v1} ${v2}`);
};

var student1 = {
  name: "john",
  age: 23,
};

var v1 = "boogyman";
var v2 = "yo ho ho";

var arr = [v1, v2];

printNAme.call(student1, v1, v2); // `call` passes arguments one by one
printNAme.apply(student1, arr); // `apply` passes arguments as an array

var newFunction = printNAme.bind(student1, v1, v2); // `bind` returns a new function
newFunction(); // Calling the new function

// New Binding: When a function is invoked with the `new` keyword,
// `this` refers to the new object created.
function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log(this.name);
}

var person3 = new Person("utchas", 30); // Outputs: 'utchas'

// Window Binding: When `this` is used in a function that is not part of an object
// and not explicitly bound, it defaults to the global object (`window` in browsers, `global` in Node.js).
var showName = function () {
  console.log(this.name); // `this` refers to the global object in non-strict mode
};

window.name = "globalName"; // Only works in browsers
showName(); // Outputs: 'globalName' (in browsers)

// In strict mode, `this` would be `undefined`.
// To ensure safety, always use explicit binding.
