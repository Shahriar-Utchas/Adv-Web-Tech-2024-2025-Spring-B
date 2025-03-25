// Literal types are a way to constrain the values a variable can hold.
// String Literal Type
let direction: "up" | "down" | "left" | "right";
direction = "up"; // Works
// direction = "forward"; // Error

// Number Literal Type
let statusCode: 200 | 404 | 500;
statusCode = 200; // Works
// statusCode = 201; //  Error

// Boolean Literal Type
let isLoading: true | false;
isLoading = true; //  Works

// Function with Literal Type
function handleResponse(status: "success" | "error"): void {
  if (status === "success") console.log("Operation was successful");
  else console.log(" An error occurred");
}
handleResponse("success");