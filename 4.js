// this&oop   1.this, 2.call, 3.apply, 4.bind, 5.prototypes, 6.classes

// 1.This keyword refers to the object that is associated with current function call.
// this is about how a function is called not where function is written

const hii = {
    fruitt: "guava",
    greett: function () {
        console.log(this.fruitt)
    }
}
hii.greett()

// Another example
const employee1 = {
    named: "ravi",
    showname: function () {
        console.log(this.named)
    }
};
const employee2 = {
    named: "kiran",
    savedfunction: employee1.showname
}
employee2.savedfunction()
employee1.showname()

// This in arrow function.They donot create their own this it checks from surroundoing lexical scope.
const person = {
    name: "jayanth",
    hello: function () {
        const arrays = () => {
            console.log(this.name)
        }
        arrays()
    }
}
person.hello()


// =>  call,apply,bind- Ways to control "this" while calling a function.
// call() immediately invokes a function with a specific value of this.
// The main use of call() is to execute a function while explicitly setting what this should refer to.
// (2. ) CAll -Syntax- function.call(object,argument1,argument2);

const grete = {
    name: "jayanthvarma"
}
function person7() {
    console.log(this.name)
}

person7.call(grete);

// 2.1 -Call with arguments 
function display(age, department) {
    console.log(`hello ${this.name} my age is ${age} and i am in ${department}`)
}
const obj = {
    name: "jayvar"
}
display.call(obj, 24, "artificial intelligence.")


// (3. )apply()-Does same thing almost as call.
// Differnce is how arguments are provided  -apply(object, [arg1, arg2])
function introduce(id, department) {
    return `hey ${this.name} ,${id} ,${department}`
}
const branch = {
    name: "varma"
}
console.log(introduce.apply(branch, [201, "AI"]))


// (4. )bind()-does not execute it immediately.
// It creates a new function with this fixed to the object you provide.
// const newFunction = originalFunction.bind(object, arg1, arg2, ...);

const person4 = {
    name: "jayanthbind"
}
function gree() {
    console.log(this.name)
}
newfunction = gree.bind(person4)
newfunction()

// Calling manually.
person4.obj = gree;
person4.obj()

// Bind with arguments 
const oobj = {
    name: "kopanathi"
}
function show(age, colour) {
    console.log(`hiii ${this.name} , ${age} , ${colour}`)
}
newfunc = show.bind(oobj, 24)
newfunc("green")

// (5. )Prototypes-java script uses prototype based inheritence.
// in java script every object can have connected with another object called its prototype.
// -That prototype can contain properties and methods that the object can access.
//-Object.prototype contains methods such as toString(),hasOwnProperty().
// 1. toString -Convert an object into a string representation.
const employee = {
    name: "Jayanth"
};
console.log(employee.toString());

// We can over ride it .
const person8 = {
    name: "Jayanthvar",
    toString: function () {
        return this.name
    }
};
console.log(person8.toString())

//2. hasOwnProperty-checks weather a property directly belongs to a object.
const employee3 = {
    name: "Jayanth",
    age: 24
};

console.log(employee3.hasOwnProperty("name"));
console.log(employee3.hasOwnProperty("salary"));

// Why we use prototype .Creating prototype for the function.
// function FunctionName() {
//     // properties
// }
                                                            //   --Syntax
// FunctionName.prototype.methodName = function() {
//     // method code
// };
function varm(name) {
    this.name = name
}

// Creating prototype for varm function.
varm.prototype.showName = function () {
    console.log(this.name)
}

// Creating an object.
const employee4 = new varm("jvarma")
const employee6=new varm("jayanthv")

// Calling the prototype method.
employee4.showName()
employee6.showName()


// (6. ) Classes.
// A class gives us a cleaner syntax for creating objects and working with prototypes.
class Employees {
    constructor(name, age) {
        this.name = name,
            this.age = age
    }
    showdetails() {
        console.log(`hii ${this.name} your age is ${this.age}`)
    }
}
// Creating objects for class and passing arguments.
employe1 = new Employees("jayanth", 24)

// calling the function 
employe1.showdetails()

// 6.1 Class inheritence- Classes can inherit from other classes.
class employee5 {
    constructor(name) {
        this.name = name
    }
    worker(){
        console.log(this.name)
    }
}
// Inheriting employee5 in manager
class manager extends employee5 {
    manageTeam(name) {
        console.log(name)
    }
}
// Creating object for child function and passing arguments for parent function.
oob=new manager("jayyyyyanth")
// using that object we can call the funcitons in that class with passing arguments.
oob.manageTeam("ravi")
// Using same object we can call the functions in parent class
oob.worker()

// 6.2 Super -When child class want to call the parent's constructor.
class parents{
    constructor(name){
        this.name=name
    }
}
class child extends parents{
    constructor(name,age){
        super(name)
        this.age=age
    }
    show(){
        console.log(this.name,this.age)
    }
}
// Creating object for child class 
const obbj=new child("ram",24)
// And calling the functions in that 
obbj.show()


// Implementing a small employee class based on all the topics mentioned above.
// Creating a employee classs
class employee7{
    constructor(name,age,gender){
        this.name=name
        this.age=age
        this.gender=gender
    }
    showdetails(){
        console.log(`hii i am ${this.name} my age is ${this.age} gender ${this.gender}`)
    }
}

// Creating objects for employee
const mployee1=new employee7("jayvarma",24,"male")
const mployee2=new employee7("kopanathi",25,"male")

// 1.This
mployee1.showdetails()
mployee2.showdetails()

// 2.call
mployee1.showdetails.call(mployee2)

// 3.Apply
mployee2.showdetails.apply(mployee2)

// 4.Bind
const showEmployee = mployee1.showdetails.bind(mployee2);
showEmployee();


// 5.Prototype
console.log(employee7.prototype);

// Check whether method exists on prototype
console.log(employee7.prototype.hasOwnProperty("showdetails"));