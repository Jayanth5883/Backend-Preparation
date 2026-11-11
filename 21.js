// TYPE SCRIPT BASICS -Types, interfaces, type aliases, enums, functions, unions

// TYPE SCRIPT -Type script is a programming language built on top of java script that adds static type checking
// JS allows variables to hold different type of values.

// let age: number = 25;
// age = "twenty-five"; // Type error
// Type script detects the type missmatch before the code runs, during type checking 

// Why do we need type script -
// Detect errors earlier 
// Improve code readability 
// Make larger applications easier to maintain 
// Define clear contracts between functions and modules 

// Type Script  -- is Compiled (Transpiled) in to java script 
// 1. )Types -what are types?
// A type define what type of value a variable can store.
// String -Text 
// Number -Numeric value
// Boolean -True or False 
// Array -Collection of Values 
// Object -Collection of Properties
// Any -Disables most type checking for that value 
// Unkown -Accepts any value, but requires type checking before using it as a specific type.

// Why do we need types -
// 1.  )Interfaces define the structure or shape of an object 
// How to create an interface 
// interface User{
id: Number;
name: String;
email: String;
age ?: Number;
// }

// Now use this interface -
// const user1:user={
// id:1,
// name:jayanth,
// email:kjayanthvarma@gmail.com
// }

// 2.  )Interface inheritence (extends) -
// An interface can inherit properties from another interface using extends.
// interface Person {
//     name: string;
//     age: number;
// }

// interface Employee extends Person {
//     employeeId: number;
//     department: string;
// }

// const employee: Employee = {
//     name: "John",
//     age: 25,
//     employeeId: 101,
//     department: "IT"
// };

// 3.  )Utility types -Utility types are built in Type script types that help us modify existing types without creating completely
//-new types from scratch.
// 1. )Partial           
// type User = {
//     id: number;
//     name: string;
//     email: string;
//     age: number;
// };

// type UpdateUser =Partial <User>;

// const user: UpdateUser = {
//     name: "Jayanth"
// };

// 2. )Required -Makes all properties of an existing type mandatory 
// type User = {
//     id?: number;
//     name?: string;
//     email?: string;
// };

// type RequiredUser = Required<User>;

// const user: RequiredUser = {
//     id: 101,
//     name: "Jayanth",
//     email: "jayanth@gmail.com"
// };

// 3. )Readonly -Prevents properties from being reassaigned after an object is created.
// type User = {
//     id: number;
//     name: string;
// };

// type ReadonlyUser = Readonly<User>;

// const user: ReadonlyUser = {
//     id: 101,
//     name: "Jayanth"
// };

// user.name = "Rahul"; // Error

// 4.  )Generics -
// Generics allow us to create reusable functions, classes, and interfaces that work with different data types while maintaining type safety.

// function getValue<T>(value:T):T{return value;}
console.log(getValue < number > (100));
console.log(getValue < Boolean > (true))

// 5.   )Type alias -
// A type ALIAS gives a name to an existing type or a more complex type defenition.
// Creating type alias
// type Status = "success" | "failed" | "pending";

// let paymentStatus: Status;
// paymentStatus = "success"; // Valid
// paymentStatus = "failed"; // Valid
// paymentStatus = "completed"; // Error

// Type alias object looks similar to an interface

// Type alias for a function -
// type AddFunction = (a: number, b: number) => number;
// const add: AddFunction = (a, b) => {
//     return a + b;
// };

// console.log(add(10, 20));

// Type alias with arrays -
// type UserNames = string[];
// const names: UserNames = ["John", "David", "Peter"];

// 6. )ENUM -Enumaration is a type script feature that defines a set of named constants .
// How to create an enum -
// enum paymentStatus{
// Pending,
// Success,
// Failed
// }

// let status:paymentStatus ;
// status =paymentStatus.Pending;
// Console.log(status)

// IMP -By default, numeric enums start from 0 and increment automatically.

// Numeric enum -   String enum ""-
// enum OrderStatus {
//     Pending = 1,
//     Processing = 2,
//     Shipped = 3,
//     Delivered = 4
// }

// let order: OrderStatus = OrderStatus.Shipped;
// console.log(order);

// 6.  )Functions  -A function is a reusable block of code that performs a particular task.
// TypeScript allows you to define:
// - Parameter types.
// - Return types.
// - Optional parameters.
// - Default parameters.
// - Function types.

// a.)Function with parameter types -
// function add(a: number, b: number): number {
//     return a + b;
// }
// console.log(add(10, 20));

// b.) Function returning nothing (void) -

// c.) Type script also allows arrow function
// const multiply = (a: number, b: number): number => {
//     return a * b;
// };

// console.log(multiply(10, 5));

// EX -
// interface User {
//     id: number;
//     name: string;
//     email: string;
// }

// function getUser(id: number): User {
//     return {
//         id: id,
//         name: "John",
//         email: "john@gmail.com"
//     };
// }

// 7. )UNION types -A union type allows a variable, parameter or return value to accept more than one specified type.
// We use the | symbol (pipe) to define union types.

// Union types with functions -
// function displayId(id: number | string): void {
//     console.log(id);
// }

// displayId(101);
// displayId("USER101");

