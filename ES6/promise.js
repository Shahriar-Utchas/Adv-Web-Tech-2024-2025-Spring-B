// 1. Basic Promise Example
console.log("Promise Example:");

const myPromise = new Promise((resolve, reject) => {
  const success = true; // Simulate success or failure of an operation

  if (success) {
    resolve("Operation was successful!"); // Resolve the promise with success message
  } else {
    reject("Operation failed!"); // Reject the promise with failure message
  }
});

// Handling the resolved promise with .then() and rejected promise with .catch()
myPromise
  .then((result) => {
    console.log(result); // Output: Operation was successful!
  })
  .catch((error) => {
    console.log(error); // This would be executed if promise is rejected
  });

// 2. Async/Await Example: Using Promises with async/await
console.log("\nAsync/Await Example:");

function fetchDataFromServer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simulate success or failure of fetching data
      if (success) {
        resolve("Data fetched successfully from the server!"); // Resolve if successful
      } else {
        reject("Failed to fetch data from the server!"); // Reject if failed
      }
    }, 2000); // Simulate a 2-second delay for fetching data
  });
}

// An async function that handles the promise using await
async function fetchData() {
  try {
    console.log("Fetching data...");

    // Await the promise from fetchDataFromServer()
    const data = await fetchDataFromServer();
    console.log(data); // Output: Data fetched successfully from the server!
  } catch (error) {
    console.log(error); // This will catch any error in the promise and log it
  }
}

// Calling the async function
fetchData();

// 3. Using Multiple Promises with async/await
console.log("\nMultiple Promises Example:");

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms)); // Returns a promise that resolves after "ms" milliseconds
}

async function simulateTasks() {
  console.log("Task 1 started");
  await delay(2000); // Waits for 2 seconds (simulating task completion)
  console.log("Task 1 completed");

  console.log("Task 2 started");
  await delay(1000); // Waits for 1 second (simulating task completion)
  console.log("Task 2 completed");

  console.log("All tasks completed!");
}

// Calling the simulateTasks async function
simulateTasks();

// 4. Chaining Promises: A Complex Example
console.log("\nChaining Promises Example:");

function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1 complete");
    }, 1000);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 2 complete");
    }, 1000);
  });
}

task1()
  .then((result) => {
    console.log(result); // Output: Task 1 complete
    return task2(); // Chain the second task
  })
  .then((result) => {
    console.log(result); // Output: Task 2 complete
    console.log("All tasks completed!");
  })
  .catch((error) => {
    console.log("Error:", error);
  });
