// Basic Closure Example
function outerFunction() {
  let outerVariable = "I am from outer scope";

  function innerFunction() {
    console.log(outerVariable); // Inner function retains access to outer scope
  }

  return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Outputs: 'I am from outer scope'

// Closure with Counter
function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter(); // Outputs: 1
counter(); // Outputs: 2
counter(); // Outputs: 3
