const fs = require("fs");

// Writing to a file
fs.writeFileSync("example.txt", "Hello, Node.js!");
console.log("File written successfully");

// Reading from a file
const data = fs.readFileSync("example.txt", "utf8");
console.log("File content:", data);

// Appending to a file
fs.appendFileSync("example.txt", "\nAppending some data.");
console.log("Data appended.");

// Deleting a file
fs.unlinkSync("example.txt");
console.log("File deleted.");
