// modern js -ES6+, map, filter, reduce, find, some, every, modules                                                        
// - map() transforms array data
// - filter() selects matching data
// - reduce() folds data into one value
// - find() gets the first matching item
// - some() checks if any match exists
// - every() checks if all match
// - modules divide code across files

// ES6, also called ECMAScript 2015, introduced many features that made JavaScript easier to write and maintain
//1. Let and const .Let need to reassaign and const no need.
let names="jayanth";
const named="JAYanth"
function display(){
    names=7
    console.log(names)
    console.log(named)
}
display()

// 2.Arrow functions.
// //(Normal funciton )
// function add(a,b){
//     console.log(a+b)
// }
// add(3,4)
// (Arrow function)
const add=(a,b)=>{
    console.log(a+b)
}
add(3,4)

// 3.Template literals- Use backticks to insert variables directly into strings.
hii='Fine'
numb=7
console.log(`i am ${hii} mr ${numb}`)

// 4.Destructuring-Extracting valiues from array or objects
// // Array destructuring 
// arr=[10,"ar",30345353n,49]
// const [first,second,third]=arr
// console.log(first,second,third)

//Object Destructuring
student={
    name:"Jayanth Varma",
    age:24,
    study:70
}
const {name,age,study}=student
console.log(name,age,study)

//6.Spread and rest operator 
// spread(...)-expand or copy data
const oldemployees=[1,2,3,4]
const newemployees=[...oldemployees,5,6,7]
console.log(newemployees)

// Modify the array without changeing the new one 
const employees={name:"jayanth",age:"57"}
const updateemployee={
    ...employees,
    age:60
}
console.log(updateemployee)

// rest operator-Grouped unassaigned items in a new array
function tadd(...numbers){
    return numbers.reduce((total,n)=>total+n,0)
}
result=tadd(1,2,3,4,5,6,7)
console.log(result)

const num=[1,2,3,4,5,6,7]
const [,,,,second,...rest]=num
console.log(`${second}`)
console.log(`${rest}`)

// DATA TRANSFORMATION-(exercises)
const employe = [
    { id: 1, name: "Asha", salary: 30000, department: "IT" },
    { id: 2, name: "Ravi", salary: 45000, department: "HR" },
    { id: 3, name: "Kiran", salary: 25000, department: "IT" },
    { id: 4, name: "Meena", salary: 60000, department: "IT" }
];

// map-(Transforming every element)
// Creating the new array by transforming each element in the original array.
const nams=employe.map(employe=>employe.name)
console.log(nams)

// Filter-(Select matching elements)-condition returns a boolean value.
// return a new array containing only the elements that pass a condition.
const highsalaryemp=employe.map(employee=>employee.salary>20000)
console.log(highsalaryemp)

// Reduce()-combine item into a result
const employesal=employe.reduce((total,employe)=>total+employe.salary,0);
console.log(employesal)

// find() — find the first match
// Purpose: Return the first element that satisfies a condition.
// return one first matching element or undefined 
const employ=employe.find(employ=>(employ.id===3))
console.log(employ)

// some -Does at least one item match 
// Purpose: Return true if at least one array element satisfies the condition.
const highempsal=employe.some(emploe=>emploe.salary>50000)
console.log(highempsal)

// every()-Do all items match
// purpose-Return true only if all elements satisfy the condition.
const emplo=employe.every(emplo=>emplo.salary>26000)
console.log(emplo)

