// 1.Arrays,2. objects,3. destructuring,4. spread/rest,5. Optional chaining,6. nullish coalescing.

// 1.ARRAY's-Array is an ordered ,globally-available object used to store multiple values in a single variable.
// -Arrays are ZERO=INDEXED .The position of the first value is 0.

// Declaration -There are two syntaxes of declaring a array 
let arr = new Array();
let arr1 = [];

// An array can store elements of any type.We can call them by index values.
let arr2 = ["value", { key: "object" }, true, function () { return ("this is a function") }]
console.log(arr2[0])
console.log(arr2[1].key)
console.log(arr2[3]())

// We can get an element by its number in square brackets:
let fruits = ["guava", "hello"];
console.log(fruits[0]);

// Replace the element.
fruits[1] = "mango";
console.log(fruits[1])

//Adding element.
fruits[2] = "papaya"
console.log(fruits[2])

// A queue is one of the most common uses of an array.
// 1.push appends an element to the end.
// 4.pop takes an element from the end.
// 2.shift get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1

// Methods that work with the end of the array:
// 1.Push()-Append the element to the end of the array:
console.log(fruits.push("apple"))

console.log(fruits[fruits.length] = "banana")

//2.POP- Extracts the last element and returns it.Remove and return element.
console.log(fruits.pop())
console.log(fruits)

// methods that work with begining of the aray.
//3.shift()-Extracts the first element of the array and returns it:. Remove and return element.
console.log(fruits.shift());

//4. Unshift()-adds the element at the begining of the array
console.log(fruits.unshift("guava"));
console.log(fruits)


// 2. OBJECT-
// An object can be created with curly braces {…} with an optional list of properties.
//  A property is a “key: value” pair, where key is a string (also called a “property name”), 
// and value can be anything.

// Declaration- An empty object is created using these two syntaxes.
let user = new Object(); // "object constructor" syntax
let user1 = {};  // "object literal" syntax

// Creating object and adding property.
const obj = new Object()
obj.x = 10
console.log(obj)

// We can immediately put some properties into {...} as “key: value” pairs:
user1 = {
    name: "jayanth",
    age: 24
}
// Accessing properties.
console.log(user1.name)       // Dot notation
console.log(user1["age"])    //bracket with quotetions

const key = "name"
console.log(user1[key])     //Dynamic access only possible with square brackets


// Object can store different types of data types.
// Object literal
const person = {
    details: "Aisha",
    age: 28,
    isStudent: false,
    greet() {
        return `Hi, I'm ${this.name}`;
    }
};
console.log(person.details, person.age, person.isStudent, person.greet())

//2.1 OPTIONAL CHAINING(Safe access).
console.log(person.address?.city);  // undefined instead of throwing an error
console.log(person.getAge?.());     // calls only if the method exists

console.log(person.email = "jay@ga9494")    //Adding 
console.log(person.age = 22)                      //Updating
console.log(delete person.isStudent)    //Deleting


//2.2 Es6+Short hand features.
//1. Property shorthand.
const name = "Aisha", age = 28;
const p = { name, age };
console.log(p)

//2.3 Destructuring 
// const { propertyName: variableName } = object;

const person1 = {
    name1: "Jayanth",
    age1: 22,
    address: {
        street: "MG Road"
    }
};
const { name1, age1 } = person1;
console.log(name1, age1)

// Rename a property syntax.
// const { propertyName: variableName } = object;

// fullName and city are now variables created by destructuring.
const { name1: fullName, city = "Unknown" } = person1; // rename + add default property.
console.log(fullName, city)

const { address: { street } } = person1;
console.log(street)

// 2.4 Both spread (...) and rest (...) use the same ... syntax.
// Spread operator -Take the values out and spread them.
const numbers = [1, 2, 3, 4, 5, 6, 7]
const newnumbers = [...numbers, 8, 9, 10]
console.log(newnumbers)

const about = {
    names: "jayanthvarma",
    age: 24
}
const newabout = {
    ...about,
    city: "chennai"
}
console.log(newabout)

// 2.5 Rest operator means collecting the remaining values.
const num = [1, 2, 3, 4, 56, 7]
const [second, ...rest] = num
console.log(second)
console.log(rest)

// Rest in Function
function add(...numbers) {
    console.log(numbers)
}
add(10, 20, 30, 40, 50)

//3. Destructuring
// Es6-"Unpack" values from arays or properties from objects directly into distinct variables . 

const user2 = { id: 101, name2: "jaya", role: "Admin" }
//  Traditional way
// const nameold=user.name

// Destructuring way
const { name2, role } = user2
console.log(name2, role)

// Function parameter destructuring.
const student = { name: "Alex", grade: "A" };

// Destructuring directly in the parameters
function displayStudent({ name, grade }) {
    console.log(`${name} got an ${grade}.`);
}

displayStudent(student); // "Alex got an A."

// 4.Spread and Rest operator.
// 4.1 Spread operator-Creates shallow copies of arrays/objects.
const items = ["apple", "banana"]
const moreitems = ["grape", ...items, "orange"]
console.log(moreitems)

// 4.2 Rest operator-Grouped unassaigned items into a new array.
// Handling infinite function arguments.
function sum(...numbers) {
    // 'numbers' becomes an actual array: [10, 20, 30]
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(10, 20, 30)); // Output: 60

// 5. Optional chaining.
// Allows you to safely access deeply nested object properties ,call functions,or lookup array indices without
//  manually checking if each intermediate reference exist.
// If the reference before the ?. operator is null or undefined,
// The expression short-circuits and immediately returns undefined

//1. Accessing nested properties.
const user3 = { name: 'Alice', address: { city: 'Paris' } };

// Old way (verbose)
const city1 = user3 && user3.address && user3.address.city;

// Modern way with optional chaining
const safeCity = user3.address?.city; // "Paris"
const unknownZip = user3.address?.zipCode?.code; // undefined (No crash!)
console.log(safeCity);
console.log(unknownZip);

//2. Accessing arrays
const data = { users: ["Alice", "BOB"] }
console.log(data.users?.[0])
console.log(data.admin?.[0])

// 3. Calling optional functions 
const helper = {
    logmessage(name) {
        return name
    }
}

console.log(helper.logmessage("jayanth"));
console.log(helper.missedmessage?.());

// Optional chaining frequently pairs with the nullish coalescing operator (??)
//  to provide a clean fallback value whenever a property is missing
const person4 = { nam: "jayanth" }
const city2 = person4.address?.city ?? "unknown city"
console.log(city2)

// Nullish Coalescing(??)
// nullish coalescing operator (??) is a logical operator in JavaScript that returns its right-hand side operand 
// when its left-hand side operand is null or undefined.
//  Otherwise, it returns its left-hand side operand.
const userAge = 0;

// Using Nullish Coalescing (??)
const finalAge = userAge ?? 18;
console.log(finalAge); // Output: 0 (because 0 is not null or undefined)

// Using Logical OR (||)
const fallbackAge = userAge || 18;
console.log(fallbackAge); // Output: 18 (because 0 is falsy, so || overrides it)






// Employee data manipulation assaignment.
const employees = [
    {
        id: 1,
        name: "Jayanth",
        age: 22,
        department: "IT",
        salary: 50000,
        address: {
            city3: "Chennai",
            street: "MG Road"
        },
        skills: ["JavaScript", "Node.js"]
    },
    {
        id: 2,
        name: "Rahul",
        age: 25,
        department: "HR",
        salary: null,
        address: {
            city: "Bangalore"
        },
        skills: ["Recruitment", "Excel"]
    },
    {
        id: 3,
        name: "Priya",
        age: 24,
        department: "IT",
        salary: 60000,
        skills: ["JavaScript", "React"]
    }
];

//1. Finding employee list using map.
const employeNames = employees.map(employee => employee.name)
console.log(employeNames)

//2. finding it employee rols using filter()
const itEmployees = employees.filter(
    employee => employee.department === "IT"
);
console.log(itEmployees);

// 3.Object destructuring
const { id, department, salary } = employees[0]
console.log(id)
console.log(department)
console.log(salary)

//4. Rename using destructuring 
const { name: employeename } = employees[0]
console.log(employeename)

// 5. Nested destructuring 
// -Get the city of the first employee using nested destructuring.
const { address: { city3 } } = employees[0];
console.log(city3)

// 6. Optional chaining find the city of the priya.
const users = employees[2].address?.city;
console.log(users)            //Undefined

//7.Rahul salary is null -nullish coalescing
const salary1 = employees[1].salary ?? "salary is currently unavailable"
console.log(salary1)

// 8.update user salary with spread operator
const updatedsalary = {
    ...employees[0],
    salary: 50000
}
console.log(updatedsalary)

//9.Spread operator with aray 
const newskills = [
    ...employees[0].skills,
    "Type script"
]
console.log(newskills)

// 10.function print employee name and skills with employee skills using rest operator.
function printemployee(name7, ...skills) {
    console.log(`Employees: ${name7},`)
    console.log(`Skills: ${skills}`)
}
printemployee(
    "Jayanth",
    "JavaScript",
    "Node.js",
    "PostgreSQL"
);


// *
function getEmployeeSummary(employee) {
    const { name, department, salary } = employee;

    const employeeSalary = salary ?? "Salary not available";

    return `${name} works in ${department} and earns ${employeeSalary}.`;
}

console.log(getEmployeeSummary(employees[0]));
console.log(getEmployeeSummary(employees[1]));