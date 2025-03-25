"use strict";
let direction;
direction = "up";
let statusCode;
statusCode = 200;
let isLoading;
isLoading = true;
function handleResponse(status) {
    if (status === "success")
        console.log("Operation was successful");
    else
        console.log(" An error occurred");
}
handleResponse("success");
