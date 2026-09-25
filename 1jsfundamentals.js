// 1.Variables
// 2.var,let,const
// 3.Data types
// 4.Operators
// 5.Type coercion

// (1)  Variables 
// A variable is a "named storage" for data. A variable is named place used to store and access a value in a program.
let message;         //Declaration
message="value"      //assaigning
//alert(message)       //Shows the variable content, alert() is a browser-provided function used to display a simple popup message to the user.
console.log(message)

// (2)  var ,let ,const.
// var,let,const are the three keywords used to declare variables.Let and const are introduced in modern js ES6(ECMAScript 6)
// Feature                      var                   let           const
// ScopeFunction                Scope / GlobalBlock   ScopeBlock    Scope
// Reassignable?                Yes                   Yes           No
// Redeclarable?                Yes (in same scope)   No            No
// Hoisting BehaviorInitialized as undefinedHoisted, uninitialized (TDZ)Hoisted, uninitialized (TDZ)
// Required Initialization?     No                    No           Yes

// HOISTING-
// var -Var is hoisted and automatically initialized with a value of undefined .You can tchnically call them before they 
// are written in the code without throwing a crash error.

// Let & Const -hoisting the (TDZ): They are hoisted to the top of their block but they are not initialized.
// - TDZ  is the period between entering the variables scope and the point where the let or const variable is initialized
// During this period the variable cannot be accessed 

// (3)  Data Types-
// A value in JavaScript is always of a certain type. For example, a string or a number.

// There are 8 js data types are there .7 are primitive and 1 are non primitive.
// Number,bigint,string,boolean,null,undefined,symbol. object

// number- The number represents both integer and floating point numbers.
let n = 123;
n = 12.345;
console.log(n)
// NAN - it is a result of an incorrect or undefined mathematical operation.
console.log("a"/1) 

// Big int -value is created by appending n to the end of an integer:
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

// String- in js must be surrounded by quotes.
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

//4  Boolean(logic type)-The boolean type has only two values: true and false.
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

// 5  NUll - It forms a separate type of its own which contains only the null value:
let age = null;
console.log(typeof age)

// /6 Undefined-The meaning of undefined is “value is not assigned”.
// If a variable is declared, but not assigned, then its value is undefined:

// (7) Symbol- It is used to create a unique identifier.
// /ex: const id = Symbol();
// Why do we need symbol (uniqueueness)-
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2);
// Why is uniqueness useful-
// Object 
const user = {
    name: "Jayanth"
};
// Unique property
const id = Symbol("id");

user[id] = 101;
console.log(user[id])


// 8 Object-An object is used to store multiple related pieces of data together as key-value pairs.
const user1 = {
    name: "Jayanth",
    age: 25,
    isAdmin: true
};
// Accessing objects 1.using dot notation and suare bracket.
console.log(user1.name);
console.log(user["name"])

// Objects are mutable -You can change the properties of an object:
const user4 = {
    name: "Jayanth",
    age: 25
};
user.age = 26;     // we cannot reassaign but we can modify 
console.log(user.age);

// Object is a reference value -Because user2 & user3 refer to same object.
const user2 = {
    name: "Jayanth"
};
const user3 = user2;
user3.name = "Rahul";
console.log(user3.name);

// 8.2 Array-An array is an object in JavaScript.
const numbers = [10, 20, 30];
// You can access values using indexes.
console.log(numbers[1])
console.log(typeof(numbers))   //Arrays are the type of the objects.

// Arrays can contain different types.
const data = [
    "Jayanth",
    25,
    true,
    { city: "Chennai" }
];

// 8.3 Functions -functions are also objects in java script.
function greet() {
    console.log("Hello");
}
// You can add even a property 
greet.message="property added to function";
console.log(greet.message);
console.log(typeof(greet))  

// 8.4 Date- is another built in object.
const today=new Date()
console.log(today)
// It represents date time information.
// you can use methods such as 
console.log(today.getMonth())

// 8.5 Map is an object designed to store key value pairs.
// Advantage keys can be of any type. 
const users = new Map();
users.set(1, "Jayanth");
users.set("user2", "Rahul");
console.log(users.get(1));
console.log(users.get("user2"))

// 8.6 Set- is used t0 store unique values.
const number = new Set();
number.add(10);
number.add(20);
number.add(10);
console.log(number)

// (4) Operators- 

// Unary-Unary means an operator works with ONE operand.
let u = 1;
u = -u;
console.log( u ); // -1, unary negation was applied


// Binary operator- Binary means an operator works with TWO operands.
let v = 1, y = 3;
console.log( y - v ); // 2, binary minus subtracts values

// 1.Arithmatic oparetors
// (+) Addition,(-)Subraction,(*)multiplication,(**)Exponentiation,(/)Division,(% modulus)Division reminder,(++)increment,(--)decrement
// 1.Increment increases a value by one 
let count = 5;
count++;
console.log(count);
let count2=count;
count2--;
console.log(count2)

// 2.Assaignment operators.
// Assaignment operators put values into variables.
// +=,-=,*=,/=,%=,
let x = 10;
x += 5;

// 3.Comparision operators.
// Comparision operators compare values and return a boolean.Return true or false.
// >,<,>=,<=,==,===,!=,!==

// == This compares values after type coercion may occur.
console.log(5 == "5");   //js converts "5" to number for the comparision.

// === checks both value and type.

// !=   //It also allows type coercion.

// 4. Logical operators are commonly used with conditions.(&,||,!).
// && means both conditions must be true.
//|| means at least one condition must be true.
// ! reverses a Boolean value.

// 5.NULLISH COALESCING  ??
// ?? uses the right-hand value only when the left side is NULL or UNDEFINED.
let username = null;
let result = username ?? "Guest";
console.log(result);

// 6.TERYNARY OPERATOR- is a short way to write a simple if else.
// Syntax-condition ? valueIfTrue : valueIfFalse
let aged = 20;
let results = age >= 18 ? "Adult" : "Minor";
console.log(results);

// 7.typeof operator-typeof tells you the type classification of a value.
tp="hello"
console.log(typeof(tp))
typeof (10)         
typeof true       
typeof undefined   
console.log(typeof(10n))         
typeof Symbol()    
typeof {}          

// Bitwise operators 
// & Both bits must be 1.
// | At least one bit must be 1.
// ^ Different bits are 1.
// ~ Flip the bits.
// Left shift a<<b=a*2^b
// Right shift a >> b = floor(a ÷ 2^b)


// (5)Type Coercion:
//Type coercion is the automatic conversion of values from one data type to another.
// Type coercion happens when you perform an operation on different data types, 
// and the JavaScript engine tries to make them "fit" together.

let result1 = ('5' + '2'); // = 52
let result2 = ('5' - '2'); // = 3

// String Coercion-
// If any part of a + operation is a string, JavaScript converts everything to strings and concatenates them.
console.log("2"+3);

// Numeric coercion-

// Other arithmetic operators (-, *, /, %) and the unary plus (+x) force values into numbers.
let w = "5" - 2 // w = 3
console.log(w)

// Truthy becomes true 
Boolean("hello")  // true
Boolean(10)       // true
Boolean(-5)       // true
Boolean([])       // true
Boolean({})       // true

// Falsy becomes false.
// There are only a few important Falsy values.
Boolean(false)      // false
Boolean(0)          // false
Boolean(-0)         // false
Boolean(0n)         // false
Boolean("")         // false
Boolean(null)       // false
Boolean(undefined)  // false
Boolean(NaN)        // false