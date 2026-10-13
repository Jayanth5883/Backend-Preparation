// Async  Java script-Callbacks, Promises, async/await .EXERCISE->Build async functions using mock APIs

// 1.Synchronous-Excutes code one after another
console.log("start")
let result=10+20
console.log(result)
console.log("end")

// 2.Asynchronous- async operations let your program do other work while waiting for the tasks like i/o 
// or network requests to complete 
console.log("task started ")
// setTimeout(()=>{
//     console.log("this task may take time to excute but code does not stop ")
// },3000);
console.log("The programme didn't end")

// 3.Call back function -A call back function passed as an argument to another funciton,So the receiving function can 
// call it later or at a particular point .

function getfunc(callback){
    const employee={
        name:"Jayanth varma",
        age:24,
        departmentId:201,
        email:"jayanth@gmail.com"
    }
    callback(employee)
}
function displayemp(employee){
    console.log(employee.name)
    console.log(employee.age)
}
getfunc(displayemp)

//4. Call back hell -To perform the different tasks in order.
function getemploy(callback){
    const employe={
        name:"jayanthvarma",
        age:23,
        departmentId:101,
        email:"Jayanthvarma@gmail.com"
    }
    callback(employe)
}
function getdepartment(departmentId,callback){
    const department={
        name:"IT",
        managerId:501
    }
    callback(department)
}
function getmanager(managerId,callback){
    const manager={
        name:"ravi"
    }
    callback(manager)
}
function sendemail(email,callback){
    console.log(`sending email to ${email}`)
    callback("success")
}

// Nested callbacks ,callback hell
getemploy((employe)=>{
    getdepartment(employe.departmentId,(department)=>{
        getmanager(department.managerId,(manager)=>{
            sendemail(employe.email,(result)=>{
                console.log("employe",employe.name)
                console.log("department",department.name)
                console.log("manager",manager.name)
                console.log("email sent")
            })
        })
    })
})

// 5. A Promise is an java script object that represents the future result of an object.
// It contains the three states 1.Pending,2.Fullfiled,3.Rejected
// A promise starts as pending and eventiually become either fullfilled or rejected.Once it is settled it state cannot be change again 
// const mypromise=new Promise((resolve,reject)=>{     //new Promise creates a new promise
//     reject("Data recieved successfully")
// })
// mypromise
//     .then((data)=>{      //Handles the successful result
//         console.log(data)
//         })
//     .catch((err)=>{
//         console.log(err)
//     })

// 6.Promise chaining-passing data between operations.
// Promise.resolve({name:"jayanth",departmentId:24})
//     .then((employe)=>{            //Receving the object 
//         console.log(employe.name)        //Access the propertty
//         return employe.departmentId
//     })
//     .then((nex)=>{          //Recieves the value
//         console.log(nex)
//         return "it"
//     })
//     .then((catc)=>{
//         console.log(catc)
//     })

//Here .then returns another promise.

// function getemployee(){
//     return new Promise((resolve)=>{
//         resolve({name:"jayanth",id:1})
//     })
// }
// function getsalary(employeidId){
//     return Promise.resolve(30000)
// }
// getemployee()
//     .then((employe)=>{
//         console.log(employe.name)
//         return getsalary(employe.id)
//     })
//     .then((salary)=>{
//         console.log(salary)
//     })

//Async await-async(makes the functioin always return a promise)
// Await- waits for a promise to settle before continueing to the next line inside that async function
// if fullfilled it gives the resolved value
function getemployee(){
    return Promise.resolve({
        name:"jayanth",
        id:1
    })
}
function getsalary(employeeid){
    return Promise.resolve(30000)
}
async function showdata(){
    const employ=await getemployee()
    console.log(employ.name)
    const salary=await getsalary(employ.id)
    console.log(salary)
}
showdata()

// Imagine an API that returns employee information after 2 seconds.
function getinfo(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({
                name:"Jayanth",
                id:7
            })
        },1000)
    })
}
async function displayemploye(){
    console.log("fetching the details")
    const employe=await getinfo()
    console.log(employe)
}
displayemploye()

// with real Mock api
async function getusers(){
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users")
        const users=await response.json()
        console.log(users)
    }
    catch(err){
        console.log(err)
    }
}
getusers()