// ✅ TypeScript Examples: Basics + Why It's Better Than JavaScript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1. Type Annotations
var username = "Alice";
var age = 30;
var isLoggedIn = true;
// In JavaScript, these could be reassigned to any type without warning.
// 2. Function with Typed Parameters and Return
function greetUser(name) {
    return "Hello, ".concat(name);
}
console.log(greetUser("Alice")); // ✅
function printUserInfo(user) {
    console.log("ID: ".concat(user.id, ", Name: ").concat(user.username));
}
var user1 = { id: 1, username: "john_doe" };
printUserInfo(user1);
// const user2 = { id: 2, name: "not_valid" };
// printUserInfo(user2); // ❌ Error: Property 'username' is missing
// 4. Type Inference
var score = 100; // Inferred as number
// score = "high"; // ❌ Error: Type 'string' is not assignable to type 'number'
// 5. Enums
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Done"] = 2] = "Done";
})(Status || (Status = {}));
var currentStatus = Status.InProgress;
console.log(currentStatus); // 1
// 6. Classes and Inheritance
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        console.log("Some generic sound");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("Woof!");
    };
    return Dog;
}(Animal));
var hello = "Hello";
console.log(hello);
var dog = new Dog("Buddy");
dog.makeSound(); // Woof!
// 7. Real-World Example: Preventing Common JS Bug
function calculateTotal(price, tax) {
    return price + tax;
}
console.log(calculateTotal(100, 0.2)); // 100.2
// JavaScript version could cause this bug:
// calculateTotal("100", "0.2"); => "1000.2" (string concatenation)
// TypeScript catches this at compile time! ✅
