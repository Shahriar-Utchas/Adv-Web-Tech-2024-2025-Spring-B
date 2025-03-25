// Generic functions and classes can work with any data type.
// --- Basic Generics ---
function identity<T>(arg: T): T {
    return arg;
  }

console.log(identity("Hello Generics!"));
console.log(identity(42));

// --- Generic Function ---
function merge<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

console.log(merge("Shahriar", 23));

// --- Generic Interface ---
interface Box<T> {
  value: T;
}

let stringBox: Box<string> = { value: "Generic String" };
let numberBox: Box<number> = { value: 100 };

console.log(stringBox, numberBox);

// --- Generic Class ---
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item);
  }

  getItems(): T[] {
    return this.data;
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("TypeScript");
textStorage.addItem("Generics");
console.log(textStorage.getItems());
