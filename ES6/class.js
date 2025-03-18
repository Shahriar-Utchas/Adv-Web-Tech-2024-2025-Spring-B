class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// Creating an object from the class
const person1 = new Person("Shahriar", 25);
const person2 = new Person("Utchas", 30);

person1.greet(); // Output: Hello, my name is Shahriar and I am 25 years old.
person2.greet(); // Output: Hello, my name is Utchas and I am 30 years old.

//inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent class constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog1 = new Dog("Max", "Golden Retriever");
dog1.speak(); // Output: Max barks.
