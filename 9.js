// Node.js core- 1.)Node architecture, 2.)V8, 3.)Event Loop, 4.)non-blocking I/O
// Imagine an employee management application receives 100 API requests.

// 1.  Node architecture
// Node.js recieves the incoming requests
// V8 excutes the java script code
// Node.js uses the event loop and underlying I/O mechanisms to coordinate operations.
// Data base or file operations wait for results without necessarly blocking java script excution
// Node.js sends responses when the required results are ready 

// 1.Client request phase- The client send an http or network request to the node.js server
// The request is recieved and placed in the event queue.

// 2.V8 engine and bindings-The google V8 engine compiles and excute java script code 

// 3.Event loop pickup-The single threaded event loop continuously checks the event queue and picks up requests 
//one by one 

// 4.Task routing (Non-Blocking was blocking)-
// (Non-blocking tasks)-Simple data parsing or minor data operations are handling immediately by the 
// Node.js starts the operation and allows JavaScript to continue executing other work
// while waiting for the operation to complete.

// (Blocking tasks)-Synchronous operations, such as readFileSync(), block the JavaScript thread
// until the operation finishes. During this time, the thread cannot execute other JavaScript callbacks.

// 3.)Event loop-The event loop is a mechanism in node.js that coordinates when eligible asynchronous callbacks excute
// Allowing node.js to continue processing other work while asynchronous operations are pending 
// Real-time ex: A user requests a product from your API, and the backend needs to fetch its details from a database.

// 4.)Non blocking I/O-
// It allows node.js to initiate an I/O operation such as reading a file or requesting data base data
// and continue excuting other work instead of synchronously waiting for that operation to finish
//Real-time example: A backend receives a request to read a report file 

//blocking example 
const fs = require("node:fs");
console.log("1111File reading started");
const data = fs.readFileSync("report.txt", "utf8");
console.log(data);
console.log("1111File reading ended")

// NOn blocking example
// const fs = require("node:fs");
console.log("2222File reading started");
fs.readFile("report.txt", "utf8", (error, data) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log(data);
});
console.log("22222File reading ended");


// Blocking	fs.readFileSync()	Code stops until the file read completes. 
// Non-blocking	fs.readFile(path, callback)	Code continues; callback runs when the read finishes. 
// Blocking	Long while loop	Main thread is busy; UI/event loop is frozen.
// Non-blocking	setTimeout(), Promises, async/await