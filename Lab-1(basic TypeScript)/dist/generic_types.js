"use strict";
function identity(arg) {
    return arg;
}
console.log(identity("Hello Generics!"));
console.log(identity(42));
function merge(a, b) {
    return [a, b];
}
console.log(merge("Shahriar", 23));
let stringBox = { value: "Generic String" };
let numberBox = { value: 100 };
console.log(stringBox, numberBox);
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    getItems() {
        return this.data;
    }
}
const textStorage = new DataStorage();
textStorage.addItem("TypeScript");
textStorage.addItem("Generics");
console.log(textStorage.getItems());
