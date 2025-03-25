// --- Basic Interface ---
interface User {
    name: string;
    age: number;
    isActive: boolean;
  }
  
  let user: User = {
    name: "Shahriar",
    age: 23,
    isActive: true
  };
  
  console.log(user);
  
  // --- Optional and Readonly Properties ---
  interface Product {
    name: string;
    price: number;
    description?: string; // Optional property
    readonly id: number; // Readonly property
  }
  
  let product: Product = {
    name: "Laptop",
    price: 1200,
    id: 1
  };
  
  // product.id = 2; //  Error: Cannot modify readonly property
  
  // --- Function Interface ---
  interface MathOperation {
    (a: number, b: number): number;
  }
  
  const add: MathOperation = (a, b) => a + b;
  console.log(`Sum: ${add(5, 3)}`);
  
  // --- Interface Inheritance ---
  interface Person {
    name: string;
    age: number;
  }
  
  interface Employee1 extends Person {
    position: string;
    salary: number;
  }
  
  let employee: Employee1 = {
    name: "Utchas",
    age: 24,
    position: "Software Engineer",
    salary: 500000
  };
  
  console.log(employee);
  
  // --- Extending Multiple Interfaces ---
  interface Manager extends Person, Employee1 {
    teamSize: number;
  }
  
  let manager: Manager = {
    name: "Alex",
    age: 35,
    position: "Project Manager",
    salary: 80000,
    teamSize: 10
  };
  
  console.log(manager);
  
  // --- Interface with Index Signature ---
  interface Dictionary {
    [key: string]: string;
  }
  
  let translations: Dictionary = {
    hello: "Hola",
    goodbye: "Adiós"
  };
  
  console.log(translations["hello"]);
  
  // --- Interface for Class Implementation ---
  interface Animal {
    name: string;
    makeSound(): void;
  }
  
  class Dog implements Animal {
    name = "Buddy";
    makeSound() {
      console.log("Woof Woof!");
    }
  }
  
  const dog = new Dog();
  console.log(dog.name);
  dog.makeSound();
  