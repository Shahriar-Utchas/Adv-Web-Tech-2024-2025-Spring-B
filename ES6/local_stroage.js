// Storing data in localStorage
localStorage.setItem("username", "JohnDoe");
localStorage.setItem("age", "30");

// Storing an object (converted to a string)
const user = { name: "John", age: 30 };
localStorage.setItem("user", JSON.stringify(user));

// Retrieving data from localStorage
let username = localStorage.getItem("username");
console.log("Username:", username); // Output: JohnDoe

let age = localStorage.getItem("age");
console.log("Age:", age); // Output: 30

// Retrieving an object (and parsing it back)
let userData = JSON.parse(localStorage.getItem("user"));
console.log("User Data:", userData); // Output: { name: "John", age: 30 }

// Checking the length of localStorage (number of items stored)
console.log("Number of items in localStorage:", localStorage.length); // Output: 3

// Removing a specific item
localStorage.removeItem("age");

// Trying to retrieve the removed item
let removedAge = localStorage.getItem("age");
console.log("Removed Age:", removedAge); // Output: null

// Clearing all items from localStorage
localStorage.clear();

// Verifying if all items are removed
let clearedUsername = localStorage.getItem("username");
console.log("Cleared Username:", clearedUsername); // Output: null
