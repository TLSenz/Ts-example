// ✅ TypeScript Examples: Basics + Why It's Better Than JavaScript

// 1. Type Annotations
let username: string = "Alice";
let age: number = 30;
let isLoggedIn: boolean = true;

// In JavaScript, these could be reassigned to any type without warning.

// 2. Function with Typed Parameters and Return
function greetUser(name: string): string {
    return `Hello, ${name}`;
}

console.log(greetUser("Alice")); // ✅
// console.log(greetUser(123)); // ❌ Error: Argument of type 'number' is not assignable to parameter of type 'string'

// 3. Interfaces (Type-checking object structure)
interface User {
    id: number;
    username: string;
    isAdmin?: boolean; // Optional property
}

function printUserInfo(user: User): void {
    console.log(`ID: ${user.id}, Name: ${user.username}`);
}

const user1: User = { id: 1, username: "john_doe" };
printUserInfo(user1);

// const user2 = { id: 2, name: "not_valid" };
// printUserInfo(user2); // ❌ Error: Property 'username' is missing

// 4. Type Inference
let score = 100; // Inferred as number
// score = "high"; // ❌ Error: Type 'string' is not assignable to type 'number'

// 5. Enums
enum Status {
    Pending,
    InProgress,
    Done
}

let currentStatus: Status = Status.InProgress;
console.log(currentStatus); // 1

// 6. Classes and Inheritance
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log("Some generic sound");
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    makeSound(): void {
        console.log("Woof!");
    }
}

let hello = "Hello";
console.log(hello)

const dog = new Dog("Buddy");
dog.makeSound(); // Woof!

// 7. Real-World Example: Preventing Common JS Bug

function calculateTotal(price: number, tax: number): number {
    return price + tax;
}

console.log(calculateTotal(100, 0.2)); // 100.2

// JavaScript version could cause this bug:
// calculateTotal("100", "0.2"); => "1000.2" (string concatenation)
// TypeScript catches this at compile time! ✅


