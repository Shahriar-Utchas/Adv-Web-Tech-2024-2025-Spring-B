"use strict";
let user = {
    name: "Shahriar",
    age: 23,
    isActive: true
};
console.log(user);
let product = {
    name: "Laptop",
    price: 1200,
    id: 1
};
const add = (a, b) => a + b;
console.log(`Sum: ${add(5, 3)}`);
let employee = {
    name: "Utchas",
    age: 24,
    position: "Software Engineer",
    salary: 500000
};
console.log(employee);
let manager = {
    name: "Alex",
    age: 35,
    position: "Project Manager",
    salary: 80000,
    teamSize: 10
};
console.log(manager);
let translations = {
    hello: "Hola",
    goodbye: "Adiós"
};
console.log(translations["hello"]);
class Dog {
    constructor() {
        this.name = "Buddy";
    }
    makeSound() {
        console.log("Woof Woof!");
    }
}
const dog = new Dog();
console.log(dog.name);
dog.makeSound();
