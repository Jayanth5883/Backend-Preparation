// 1.Functions, 2.Arrow functions, 3.Scope, 4.Hoisting, 5.Closures.

// 1. Functions- Functions are reusable blocks of code designed to perform specific tasks .
// unctions in JavaScript are first-class objects, meaning they can be stored in variables,
//  passed as arguments to other functions, and returned from function
// Parameters-Placeholders listed in function definition.
// Arguments: The actual values passed to the function when it is invoked.
// Return Statement: Exits the function and sends a value back to the caller. If no return is specified, 
// the function returns undefined by default.

// 1.Function declaration(Named function), 2.Function expression, 3.Arrow functions, 4.Immediately invoked function expressions.

// 1.Function declaration(named function)-
// Definr with function keyword and specific name.These are hoisted moved to top of their scope during compilation 
// WE can call berfore they appear in code .
console.log(greet("alice"));

function greet(name) {
    return `hello ${name}`
}

// 2.Function expression
//The function expression produces a function value.
// A function created inside an expression and assigned to a variable. These are not hoisted;
//  you must define them before calling them
const add = function(a, b) {
    return a + b;
};
console.log(add(3, 4));

// 3.Arrow functions ES6-syntax using the => operator
// An arrow function is a shorter way to write a function expression.
// const function_name=(parameters){
//     //code here 
// }

// curly braces and 'return' keyword for single-line statements.
const square = n => n * n
console.log(square(2))

const greets = name => {           //If only one paramter
    console.log(name)
}
greets("jayanth varma")

const funcs = (a, b) => {
    console.log(a + b);
}
funcs(1, 2);


// 4.Immediately invoked function expressions(IIFE).
// An anonymous function that runs immediately as soon as it is define.
(function () {
    console.log("This code runs instantly!");
})();

// Default Parameters	Sets a backup value if an argument is missing or undefined.
// 	function greet(name = "Guest") {}

// 5.Anonymous function-
// A function with no name, usually passed as an argument:
// setTimeout(function(){
//     console.log("This will print after 3 seconds ")
// },0);

//6. Constructor function
function hello(name, age) {
    this.name = name,
        this.age = age
}
const p = new hello("ravi", "25")
console.log(p)

// 7. Call back functions -a function is passed to another function to run later.
// function fetchData(cb){
//     setTimeout(()=>{console.log("hello")},1000)
// };
// fetchData(op=>console.log(op))

// //8.  Async function
// // async functions always return a Promise
// // await waits for the Promise to resolve
// async function getUser() {
//     const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users/1"
//     );
//     const data = await response.json();
//     return data;
// }
// async function main() {
//     const user = await getUser();
//     console.log(user);
// }
// main();

// 9.Generator function-that can pause its execution and continue later. You create one using function*:
function* numbers() {
    yield 1;
    yield 2;
}
const gen = numbers();
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

//10.This keyword-refers to an object how a function is called.
const person = {
    name: "Ravi",

    greet: function () {
        console.log(this);
        console.log(this.name)
    }
};
person.greet();

// 10.1  using this in arrow function.
const employee = {
    name: "Rahul",

    showName: function () {
        const printName = () => {
            console.log(this.name);
        };

        printName();
    }
};
employee.showName();
// Lexically scoped; inherits this from the enclosing context.

// (2.) Arrow functions(Es6)-
// 1.Multi parameters require paranthesis{}.
const ad = (a, b) => { console.log(a + b) }
ad(1, 2)

// 2.impicit return (Omit curly bases and return keyword).
const multiply = (a, b) => a * b
console.log(multiply(2, 3))

// 3.Single parameter paranthesis are optional.
const squares = n => n * n;
console.log(squares(7))

// 4.No Parameters (Requires empty paranthesis)
let fun = () => "hello ";
console.log(fun())

// 5.Arrow functions with array methods.
const nums = [1, 2, 3, 4 , 5, 6, 7]

console.log(nums.map(n => n * 2));
console.log(nums.filter(n=>n>2));   
console.log(nums.reduce((sums, n) => sums+ n, 0));
console.log(nums.find(n=>n>6))
console.log(nums.forEach(n=>console.log(n)));


// (3. ) Scope -Determines where a variable can be accessed
// It controls the visiblity and life time of the variables.
// 1.Globe scope, Functions scope, Block scope, MOdule scope.
// 1.Variables declare outside function or block are global .They can be accessed from anywhere.
let appname='aibot'
const hel=function(){
    console.log(appname)
}
hel()
console.log(appname)

// 2. Function scope -Variables declared inside function only acceseble inside that function.
function calculate() {
  let result = 100;
  var total = 200;
  console.log(result, total); // works
}
calculate();
// console.log(result); // ReferenceError
// console.log(total);  // ReferenceError

// 3.Block scope-A block is any code between { }, such as in if, for, while, or a plain block.
if (true) {
  let x = 10;
  const y = 20;
  var z = 30;
}
console.log(z); // 30 (var ignores block scope)
// console.log(x); // ReferenceError
// console.log(y); // ReferenceError

// 4.Module scope -Module scope means variables declared inside one JavaScript module/file
//  are available only inside that module unless you explicitly export them.
// Module-in modern js file can be treated as module when you use import or export.
// Export -Make something available to other modules.   -export { name };
// Import- bring it into another module.   -import { name } from "./file.js";
// app.js
// export const nam="jayavar"

// // main.js 
// import {appname} from "./app.js";
// console.log(appname)

// 5.lexical (static) scope: a function's scope is decided by where it is written in the code,
//  not where it is called.
// it searches through the lexical scope chain, starting from the current scope and moving outward.
const name = "Global";
function outer() {
  const name = "Outer";

  function inner() {
    console.log(name);
  }
  return inner;
}
const fn = outer();
fn(); // "Outer"

// (4. ) Hoisting is a behavior in JavaScript where the engine allocates memory for variable.
// 1.LET ,VAR.
// var -When you declare a variable with var, only the declaration is hoisted, not the initialization (assignment)
console.log(user5);      
var user5 = "Alice";
console.log(user5);     

// let and const Example (The Temporal Dead Zone)
// Variables declared with let and const are also hoisted, but they are not initialized with a default value.
//  They enter a state called the Temporal Dead Zone (TDZ). You cannot read or write to them until the execution line physically reaches the declaration.
// console.log(admin); // Throws ReferenceError: Cannot access 'admin' before initialization
let admin = "Bob";

// 2. Standalone function -declarations are fully hoisted.
//  Both the function name and its actual body are registered in memory before code execution.
greet(); // Outputs: "Hello!"

function greet() {
  console.log("Hello!");
}

// 3. Function expression and arrow functions.
// sayHi(); // Throws TypeError: sayHi is not a function
var sayHi = function() {
  console.log("Hi!");
};

// (5. ) Closures-
// closure allows an inner function to remember and access variables from its outer scope,
//  even after the outer function has completely finished executing
function createGreeter(name) {
    return function () {
        console.log(`Hello, ${name}!`);
    };
}
const greetJohn = createGreeter("John");
greetJohn();

// USE case
function counter(){
    let count=0
    return{
        increment:function(){count++;return count;},
        decrement:function(){count--;return count},
        getcount:function(){return count}
    }
}
const calc=counter();
console.log(calc.increment())
console.log(calc.increment())
console.log(calc.decrement())
console.log(calc.getcount())
console.log(counter.count);       // undefined (cannot be accessed directly!)