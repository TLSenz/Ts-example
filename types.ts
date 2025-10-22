// ✅ TypeScript Types: Full Examples

// 1. Basic Types
let myString: string = "Hello";
let myNumber: number = 42;
let myBoolean: boolean = true;
let myNull: null = null;
let myUndefined: undefined = undefined;
let myBigInt: bigint = 9007199254740991n;
let mySymbol: symbol = Symbol("unique");

// 2. Special Types
let anyValue: any = "Can be anything";
let unknownValue: unknown = "Must check type first";

if (typeof unknownValue === "string") {
    console.log("It is a string:", unknownValue);
}

function logMessage(): void {
    console.log("Logging something");
}

function throwError(): never {
    throw new Error("Something went wrong");
}

// 3. Object Types
let user: { name: string; age: number } = {
    name: "Alice",
    age: 30,
};

// 4. Arrays
let numberArray: number[] = [1, 2, 3];
let stringArray: Array<string> = ["one", "two", "three"];

// 5. Tuples
let person: [string, number] = ["Bob", 25];

// 6. Enums
enum Status {
    Pending,
    InProgress,
    Done
}
let currentStatus: Status = Status.InProgress;

// 7. Union Types
let id: number | string = 123;
id = "abc"; // also valid

// 8. Intersection Types
type Contact = { phone: string };
type Employee = { id: number; name: string };
type Staff = Contact & Employee;

const staffMember: Staff = {
    id: 1,
    name: "Sarah",
    phone: "123-456-7890",
};

// 9. Literal Types
let direction: "up" | "down" | "left" | "right" = "up";

// 10. Type Alias
type UserID = string | number;
let newId: UserID = 123;

// 11. Interface
interface Product {
    id: number;
    title: string;
    price: number;
}

const item: Product = {
    id: 101,
    title: "Book",
    price: 9.99,
};

// 12. Function Types
function multiply(x: number, y: number): number {
    return x * y;
}

let divide: (a: number, b: number) => number = (a, b) => a / b;

// 13. typeof
let someValue = "hello";
type ValueType = typeof someValue; // string

// 14. keyof
type Book = { title: string; pages: number };
type BookKeys = keyof Book; // "title" | "pages"

// 15. in (mapped types)
type ReadonlyBook = {
    readonly [K in keyof Book]: Book[K];
};

// 16. extends (conditional types)
type IsString<T> = T extends string ? true : false;
type Test1 = IsString<string>; // true
type Test2 = IsString<number>; // false

// 17. infer (used in advanced generics)
type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never;
type Result = ReturnTypeOf<() => number>; // number

// 18. as (type assertion)
let someInput: unknown = "I am a string";
let strLength: number = (someInput as string).length;

// 19. Utility Types
type Post = {
    id: number;
    title: string;
    content?: string;
};

type PartialPost = Partial<Post>;       // All fields optional
type RequiredPost = Required<Post>;     // All fields required
type ReadonlyPost = Readonly<Post>;     // All fields readonly
type PickPost = Pick<Post, "id" | "title">;
type OmitPost = Omit<Post, "content">;

type RecordExample = Record<"a" | "b", number>; // { a: number; b: number }

type Union = "a" | "b" | "c";
type Excluded = Exclude<Union, "a">; // "b" | "c"
type Extracted = Extract<Union, "a" | "d">; // "a"

type Nullable = string | null | undefined;
type NonNullableExample = NonNullable<Nullable>; // string

function sayHello(name: string): string {
    return `Hello, ${name}`;
}

type FuncReturnType = ReturnType<typeof sayHello>; // string
type FuncParams = Parameters<typeof sayHello>; // [name: string]

