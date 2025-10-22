// ✅ TypeScript Types: Full Examples
// 1. Basic Types
let myString = "Hello";
let myNumber = 42;
let myBoolean = true;
let myNull = null;
let myUndefined = undefined;
let myBigInt = 9007199254740991n;
let mySymbol = Symbol("unique");
// 2. Special Types
let anyValue = "Can be anything";
let unknownValue = "Must check type first";
if (typeof unknownValue === "string") {
    console.log("It is a string:", unknownValue);
}
function logMessage() {
    console.log("Logging something");
}
function throwError() {
    throw new Error("Something went wrong");
}
// 3. Object Types
let user = {
    name: "Alice",
    age: 30,
};
// 4. Arrays
let numberArray = [1, 2, 3];
let stringArray = ["one", "two", "three"];
// 5. Tuples
let person = ["Bob", 25];
// 6. Enums
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Done"] = 2] = "Done";
})(Status || (Status = {}));
let currentStatus = Status.InProgress;
// 7. Union Types
let id = 123;
id = "abc"; // also valid
const staffMember = {
    id: 1,
    name: "Sarah",
    phone: "123-456-7890",
};
// 9. Literal Types
let direction = "up";
let newId = 123;
const item = {
    id: 101,
    title: "Book",
    price: 9.99,
};
// 12. Function Types
function multiply(x, y) {
    return x * y;
}
let divide = (a, b) => a / b;
// 13. typeof
let someValue = "hello";
// 18. as (type assertion)
let someInput = "I am a string";
let strLength = someInput.length;
function sayHello(name) {
    return `Hello, ${name}`;
}
