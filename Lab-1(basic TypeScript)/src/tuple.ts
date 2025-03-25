// Tuple is a fixed-size collection of elements of different types.
// Basic Tuple
let userInfo: [string, number, boolean] = ["Shahriar", 23, true];
console.log(userInfo);

// Accessing Tuple Elements
console.log(`Name: ${userInfo[0]}`);
console.log(`Age: ${userInfo[1]}`);
console.log(`Is Active: ${userInfo[2]}`);

// Error Example 
// userInfo = [23, "Shahriar", true]; // Error due to wrong order

// Tuple Destructuring
let [name1, age1, isActive] = userInfo;
console.log(`Destructured Name: ${name1}`);

// Optional Tuple Elements
let rgbColor: [number, number, number?] = [255, 0];
console.log(`RGB Color: ${rgbColor}`);

// Rest Tuple Elements
let coordinates: [number, number, ...string[]] = [10, 20, "north", "east"];
console.log(`Coordinates: ${coordinates}`);

// Labeled Tuples (improves readability)
let httpResponse: [code: number, message: string] = [200, "OK"];
console.log(`Response: ${httpResponse[0]} - ${httpResponse[1]}`);

// Function with Tuples
function logUser(user: [string, number]): void {
  console.log(`User: ${user[0]}, Age: ${user[1]}`);
}
logUser(["Utchas", 24]);

// Modifying Tuples
userInfo[1] = 25; //  This works, type is correct
console.log(`Updated Age: ${userInfo[1]}`);

// Pushing values to Tuples (TypeScript allows this, but it breaks tuple structure)
userInfo.push("Extra Value");
console.log(`After Push: ${userInfo}`);
