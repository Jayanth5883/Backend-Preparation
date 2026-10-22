// Event loop-1.Call stack,2. microtasks,3. macrotasks,4. process.nextTick,5. setTimeout,6. setImmediate


//1.) Call stack- Where js excutes functions, follows LIFO,
// A function call adds a frame to the stack.A Frame is removed when the function returns
// When a function finishes executing or returns a value using return, its stack frame is removed from the call stack.

function add() {
    return 10 + 20;
}

let result = add();
console.log(result);

// add() is called, so its frame is added to the stack.
// add() calculates 10 + 20 and returns 30.
// Its frame is removed from the stack.
// console.log(result) prints 30.

// Important:- JavaScript doesn't pause a synchronous function 
// just because an asynchronous operation has been scheduled.

// 2.)Micro tasks- Promise Callbacks
// Synchronous code runs first.
// Microtasks run next.
// Later tasks, such as callbacks scheduled by setTimeout(), get their turn afterward.
// - Promise.then()
// - Promise.catch()
// - Promise.finally()
// - queueMicrotask()
// - The continuation after await, which runs as Promise-related microtask work
//--------- .then() schedules a microtask; it doesn't execute the callback immediately.

// console.log("first ");
// Promise.resolve().then(() => {
//     console.log("Promise callback");
// });
// console.log("second");

// Start executes synchronously.
// The Promise handler is scheduled as a microtask.
// End executes synchronously.
// After the current synchronous execution finishes, the Promise callback runs.

// 3.) Macrotasks — timers and other event-loop callbacks.
// Macro task is a common teaching term for callbacks such as timer callbacks and i/o call backs 
// Ex--
// setTimeout() — schedules a timer callback.
// setInterval() — schedules repeated timer callbacks.
// setImmediate() — schedules a callback for the check phase.
// I/O callbacks — for example, callbacks associated with file-system or network operations.
// console.log("0000");
// setTimeout(() => {
//     console.log("Timeout");
// }, 0);
// Promise.resolve().then(() => {
//     console.log("Promise");
// });
// console.log("1111");

// The Promise callback gets to run before the timer callback in this example.

// 4.)process.nextTick-A special node.js queue
// Process.nextTick()-It shedules a callback to run after the current operation completes,before the 
// node.js continues to the next event-loop phase

// Synchronous code runs first.
// The process.nextTick() callback runs.
// The Promise microtask runs.
// Later event-loop callbacks, such as timers, can execute.

// console.log("Start")
// process.nextTick(()=>{
//     console.log("nextTick")
// })
// Promise.resolve().then(()=>{
//     console.log("primse ")
// })
// console.log("end")

// 5.) setTimeout- schedule after a minimum delay.
// // Syntax- setTimeout(callback,delay)
// console.log("a")
// setTimeout(()=>{
//     console.log("c")
// },1000)
// console.log("b")

// 6.)setImmediate-Excute in the check phase
// setImmediate() schedules a function to execute later, during a particular phase of Node.js's event loop.

// console.log("A");
// setImmediate(() => {     //Shedules a callback for later
//     console.log("B");    //Node.js excutes the callback in the check phase.
// });
// console.log("C");
// setImmediate() doesn't execute the function immediately. It schedules the function for
//a specific event-loop phase
// 1. When the event loop reaches the check phase, Node.js executes the callback.

// 6.1) Poll phase- node.js process eligible i/o callbacks and waits for i/o events.
// It handles I/O related events
// I/O means input/output operations, such as:
// - Reading a file.
// - Receiving network data.

import fs from "node:fs"
// console.log("starting poll phase")
// fs.readFile("package.json","utf8",()=>{     //Node.js starts the asynchronous file operation
//     console.log("file reading call back ")  //When the operation completes,Node.js process it call back as 
// })                                          //-part of I/O event handling 
// console.log("ending the poll phase")

// 6.2) Check phase-Is the event loop phase specifically associated with excuting callbacks sheduled
// using setImmediate().
// Poll phase -Node.js process completed i/o operations,such as reading a file 
// Check phase-Node.js excutes callbacks sheduled by setImmediate()

// import fs from "node:fs";

// fs.readFile("package.json", "utf8", () => {
//     console.log("1. File reading callback");

//     setImmediate(() => {
//         console.log("2. Immediate callback");
//     });
// });

// Pass a data URI instead of a file path
fs.readFile('data:text/plain,hello world', 'utf8', () => {
  console.log('1. File reading callback');
  
  setImmediate(() => {
    console.log('3. Immediate callback');
  });
  
  console.log('2. Still inside file callback');
});

// Check phase poll phase
// fs.readFile() performs file I/O.
// When the file read completes, its callback is executed during the poll phase.
// Inside that callback, setImmediate() schedules the inner callback for the check phase.
// Once the fs.readFile() callback returns and the poll phase completes, Node moves directly to the check phase and executes the setImmediate() callback.

// fs.readFile() starts reading the file asynchronously.
// When the file reading completes, its callback executes during the poll phase.
// Inside that callback, setImmediate() schedules another callback for the check phase.
// The current file-reading callback finishes, printing 2. Still inside file callback.
// Node.js reaches the check phase and executes the scheduled immediate callback.

// fs.readFile() → its completion callback is handled through the I/O mechanism, normally in the poll phase.
// setImmediate() → schedules its callback for the check phase.
// The setImmediate() callback does not execute immediately inside the setImmediate() function call.
//  It executes when Node.js reaches the check phase.