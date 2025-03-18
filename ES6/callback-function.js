// 1. Simple Callback Function Example

// A function that accepts a callback function and calls it later
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback(); // Call the callback function after greeting
}

// A callback function that will be passed to the greet function
function sayGoodbye() {
  console.log("Goodbye!");
}

// Calling greet function and passing sayGoodbye as a callback
greet("John", sayGoodbye);

// Output:
// Hello, John!
// Goodbye!

// 2. Callback with Asynchronous Operation (Simulated with setTimeout)

function fetchData(callback) {
  // Simulate an asynchronous operation (e.g., fetching data)
  setTimeout(() => {
    const data = { message: "Data fetched successfully!" };
    callback(data); // Call the callback with data after 2 seconds
  }, 2000);
}

// A callback function that will handle the fetched data
function handleData(data) {
  console.log(data.message); // Output: Data fetched successfully!
}

// Calling fetchData and passing handleData as a callback
fetchData(handleData);

// 3. Callback with Array Methods

const numbers = [1, 2, 3, 4, 5];

// Using map() method which accepts a callback to transform each element of the array
const doubled = numbers.map(function (number) {
  return number * 2; // Multiply each number by 2
});

console.log("Doubled Numbers:", doubled); // Output: [2, 4, 6, 8, 10]

// Using filter() method which accepts a callback to filter out values based on a condition
const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0; // Keep only even numbers
});

console.log("Even Numbers:", evenNumbers); // Output: [2, 4]

// Using reduce() method which accepts a callback to accumulate values
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue; // Add up all the numbers
}, 0); // Initial value of accumulator is 0

console.log("Sum of Numbers:", sum); // Output: 15

// 4. Handling Callback Hell (Nested Callbacks)

console.log("Start of Callback Hell Example");

// This example shows nested callbacks, also known as "callback hell" or "pyramid of doom"
doSomething(function (result1) {
  console.log("First task completed", result1);
  doSomethingElse(result1, function (result2) {
    console.log("Second task completed", result2);
    doAnotherThing(result2, function (result3) {
      console.log("Third task completed", result3);
    });
  });
});

// Simulating asynchronous functions with callbacks
function doSomething(callback) {
  setTimeout(() => {
    callback("Result from first task");
  }, 1000);
}

function doSomethingElse(data, callback) {
  setTimeout(() => {
    callback(`${data} + Result from second task`);
  }, 1000);
}

function doAnotherThing(data, callback) {
  setTimeout(() => {
    callback(`${data} + Result from third task`);
  }, 1000);
}

// Output (after some time):
// Start of Callback Hell Example
// First task completed Result from first task
// Second task completed Result from first task + Result from second task
// Third task completed Result from first task + Result from second task + Result from third task

// 5. Avoiding Callback Hell with Promises (Optional Improvement)

function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: "Data fetched successfully with Promise!" };
      resolve(data); // Resolve the promise with data
    }, 2000);
  });
}

fetchDataPromise().then((data) => {
  console.log(data.message); // Output: Data fetched successfully with Promise!
});
