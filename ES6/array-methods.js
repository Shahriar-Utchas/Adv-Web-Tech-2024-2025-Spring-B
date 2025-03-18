// 1. map() - Iterates over an array and applies a function to each element
const numbers = [1, 2, 3, 4];

// map() creates a new array with the results of calling the provided function on every element.
// The function passed to map() takes 3 parameters:
// - currentValue: the current element in the array.
// - index: the index of the current element.
// - array: the array itself.
const doubled = numbers.map((currentValue, index, array) => {
  console.log(`Index: ${index}, Value: ${currentValue}, Array: ${array}`);
  return currentValue * 2;
});

console.log("Doubled Numbers:", doubled); // Output: [2, 4, 6, 8]

// 2. filter() - Filters the array based on the given condition
const filtered = numbers.filter((num) => num % 2 === 0); // Keeps only even numbers
console.log("Filtered Numbers:", filtered); // Output: [2, 4]

// 3. reduce() - Reduces the array to a single value by executing a reducer function
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue; // Adds up all the values
}, 0); // Initial value of the accumulator is 0

console.log("Sum of Numbers:", sum); // Output: 10

// 4. slice() - Returns a shallow copy of a portion of the array
// Slice does not modify the original array and returns a new array
const sliced = numbers.slice(1, 4); // From index 1 to 4 (4 not included)
console.log("Sliced Array:", sliced); // Output: [2, 3, 4]
console.log("Original Array:", numbers); // Output: [1, 2, 3, 4]

// 5. find() - Returns the first element that satisfies the condition
// If no element satisfies the condition, it returns undefined
const found = numbers.find((num) => num > 3); // Finds the first element greater than 3
console.log("Found Value:", found); // Output: 4

// 6. concat() - Merges two or more arrays into a new array
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combined = array1.concat(array2); // Concatenates array1 and array2
console.log("Combined Arrays:", combined); // Output: [1, 2, 3, 4, 5, 6]

// 7. push() - Adds elements to the end of the array and returns the new array length
const newLength = numbers.push(5, 6);
console.log("New Length:", newLength); // Output: 6
console.log("Updated Array:", numbers); // Output: [1, 2, 3, 4, 5, 6]

// 8. join() - Joins all elements of an array into a single string
const joined = numbers.join(", "); // Converts the array into a comma-separated string
console.log("Joined Array:", joined); // Output: "1, 2, 3, 4, 5, 6"

// Explanation of all methods:

/*
1. map():
- Creates a new array by applying the provided function to each element.
- Parameters: currentValue, index (optional), array (optional).
- It is non-mutating: It doesn't change the original array.

2. filter():
- Filters the array based on the provided condition.
- Returns a new array with elements that meet the condition.
- It does not modify the original array.

3. reduce():
- Reduces an array to a single value (e.g., sum, product).
- Takes a reducer function and an optional initial value.
- The reducer function takes two arguments: accumulator and currentValue.

4. slice():
- Returns a shallow copy of a portion of the array.
- Takes two parameters: start (inclusive) and end (exclusive).
- Does not modify the original array.

5. find():
- Returns the first element that satisfies the provided condition.
- Returns `undefined` if no element is found.

6. concat():
- Combines two or more arrays into one new array.
- It does not modify the original arrays.

7. push():
- Adds elements to the end of the array.
- It mutates the original array and returns the new array length.

8. join():
- Combines all elements of the array into a single string, with a specified separator.
- It does not modify the original array.

*/
