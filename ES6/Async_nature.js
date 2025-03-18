console.log("Start");

setTimeout(() => {
  console.log("First delay (2 seconds)");
}, 2000);

setTimeout(() => {
  console.log("Second delay (4 seconds)");
}, 4000);

console.log("End");

// Output:
// Start
// End
// (After 2 seconds)
// First delay (2 seconds)
// (After 2 more seconds)
// Second delay (4 seconds)
