"use strict";
let userInfo = ["Shahriar", 23, true];
console.log(userInfo);
console.log(`Name: ${userInfo[0]}`);
console.log(`Age: ${userInfo[1]}`);
console.log(`Is Active: ${userInfo[2]}`);
let [name1, age1, isActive] = userInfo;
console.log(`Destructured Name: ${name1}`);
let rgbColor = [255, 0];
console.log(`RGB Color: ${rgbColor}`);
let coordinates = [10, 20, "north", "east"];
console.log(`Coordinates: ${coordinates}`);
let httpResponse = [200, "OK"];
console.log(`Response: ${httpResponse[0]} - ${httpResponse[1]}`);
function logUser(user) {
    console.log(`User: ${user[0]}, Age: ${user[1]}`);
}
logUser(["Utchas", 24]);
userInfo[1] = 25;
console.log(`Updated Age: ${userInfo[1]}`);
userInfo.push("Extra Value");
console.log(`After Push: ${userInfo}`);
