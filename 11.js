// Node Core Modules-      fs, path, os, events, crypto, http

// Encryption -Encryption converts readeble data(plaintext) into unreadeble data(ciphertext) using a key.
// Original message: Hello123
// Encrypted message: x7a9k2...
// With the correct decryption key, you can recover Hello123.
// Node.js provides the crypto core module for encryption and decryption.

// Bcrypt -Bcrypt is a password-hashing library that converts a passwpord into one way hash.It designed for password storage.
// Original password: Hello123
// bcrypt hash: $2b$10$...
import bcrypt from "bcrypt";

const passwords = "Hello123";

// Generate a password hash
const hashedPassword = await bcrypt.hash(passwords, 10);

console.log(hashedPassword);

// Verify the password during login
const isMatch = await bcrypt.compare(passwords, hashedPassword);

console.log(isMatch); // true

// fs  File System -Read files,Write reports, Upload files
// path  File paths -Find files and join folder paths safely
// os   Operating system -Check system memory and CPU information
// Events Event handling -Notify other parts of an application when something happens
// crypto Cryptographic operations -Hash data,generate random tokens, Encrypt data.
// http HTTP server and requests -Create a web server that recieves requests and send responses.

// 1.  The Fs module (file system) -The fs modules allows Node.js to interact with Files and directories on your computer or server.
// A backend application may need to read a configuration file, Save a generated report, or create a application log.
// readFile() -Read a file asynchronously
// readFileSync() -Reads a file Synchronously
// writeFile() -Creates a file or replaces its contents
// appendFile() -Adds content to an existing file 
// mkdir() -Creates a Directory  
// unlink() -Deletes a file 

// import fs from "node:fs"
// fs.readFile("report.txt","utf8",(err,data)=>{
//     if (err){
//         console.log(err)
//     }
//     console.log(data)
// })
// console.log("Reading started")

// 2.  The Path module -Working with File paths
// The path module helps you create,Inspect ,Manipulte file and directory paths 
// Different operating systems use different path separators. Windows typically uses \,
// while Linux and macOS use /. The path module handles these differences.

// Method	        Purpose
// path.join()	    Joins path segments together
// path.resolve()	Creates an absolute path,produces an absolute path based on the current working directory
// path.basename()	Gets the filename from a path
// path.dirname()	Gets the directory portion
// path.extname()	Gets the file extension


// import path from "node:path";

// const filePath = "reports/employee/report.pdf";

// console.log(path.basename(filePath));
// console.log(path.dirname(filePath));
// console.log(path.extname(filePath));
// console.log(path.join("reports", "employee", "report.pdf"));
// console.log(path.resolve("reports", "report.pdf"));

// 3. The os module- Operating system information
// The os module provides information about the operating system and the machine running node.js

// 4.The Events module- Event-driven programming
// The Events module provides the eventEmitter class,Which allows one part of application to emit an event and
//  another part to listen for and response to that event.

// Allows to create events,Listen for events, and excute functions when those event occurs
// Example-When a user registers, trigger a userRegistered event and send a welcome email.

// Method	           Purpose
// on()	               Listen for an event every time it occurs.
// emit()	           Trigger an event.
// once()	           Listen only for the first occurrence.
// off()	           Remove a specific event listener.
// removeAllListeners()Remove all listeners for an event.
// listenerCount() 	   Count listeners attached to an event.
// listeners()     	   Get the registered listener functions.
// addListener()	   Add a listener; same as on().
// prependListener()   Add a listener at the beginning of the listener order.

// on() — Listen: Registers a callback function to execute when an event occurs.
// emit() — Trigger: Fires the event, causing its registered listeners to execute.

// import { EventEmitter } from "node:events"
// const event = new EventEmitter();

// // on() - listen for an event
// event.on("greet", () => {
//     console.log("Hello!");
// });

// // once() - execute only once
// event.once("login", () => {
//     console.log("User logged in");
// });

// // emit() - trigger events
// event.emit("greet");
// event.emit("greet");

// event.emit("login");
// event.emit("login");

// // listenerCount() - count listeners
// console.log(event.listenerCount("greet"));
// console.log(event.listenerCount("greet"))

// EventEmitter methods with realtime examples
import { EventEmitter } from "node:events";
const event=new EventEmitter

//1. on() -Register a listner
function sendWelcome(user){
    console.log(`welcome Email sent to ${user.email}`)
}
event.on("userRegistered",(user)=>{
    console.log(`${user.name} registered successfully`)
})
event.on("userRegistered",sendWelcome)

// prependListner() -Excute this listner first.
event.prependListener("userRegistered",(user)=>{
    console.log(`admin notified this user ${user.name}`)
})

// 2.once() -Excute only on the first occurence
event.once("userRegistered",()=>{
    console.log("Give user a first time welcome bonus")
})

// User registration data 
const user={
    name:"Jayanthvarma",
    email:"Kjayvar16886"
}

// 4. Listner count() -Count registered listners
console.log("Listners:",event.listenerCount("userRegistered"))

// 5. Listners() -Get registered listner functions
console.log("listnerFunctions",event.listeners("userRegistered").length)

// 6. Emit() -trigger the event
console.log("/n First registration event:")
event.emit("userRegistered",user)

console.log("/n Second registration event:")
event.emit("userRegistered",user)

// 7. off() Remove a specific listner
event.off("userRegistered",sendWelcome)

// 8. removeAllListners() -Remove every listner for this event
event.removeAllListeners("userRegistered")

console.log("/n Listners remaining:",
    event.listenerCount("userRegistered")
)

// 5. Crypto -Crypto module is a built in node.js module used for security related operations 1.hashing passwords 2.Generating random values
// 3.Encryption and 4.Creating digital signatures
// Crypto methods-
// CreateHash() -Creates a hash of data 
// createHmac() -Create a hash with a secret key
// randombytes() -Generates cryptographically secure random bytes
// randomUUID() -Generates a random UUID
// createCipheriv() -Encrypts data 
// createDecipheriv() -Decrypts data

// Ex- Hashing data
import { createHash } from "node:crypto";  

const password="jayanth123"
const hashedpassword=createHash("sha256") //Selects the "sha256" algorithm
    .update(password) //Provides the data to hash
    .digest("hex") //Produces the hash as a hexadecimal string 
console.log("hashed password:",hashedpassword)    

// Genarate a secure random value
import { randomBytes,randomUUID } from "node:crypto";

console.log(randomBytes(16).toString("hex"))
console.log("Secure random value:",randomUUID())

// Crypto is used in real time applications like-
// Password security -Hash passwords before storing them using bcrypt or Argon2
// Authentication -Generate a secure random tokens
// Data protection -Encrypt senstive information when encryption is required
// API security -Use HMAC to verify data integrity and authenticity

// 6. HTTP -Hyper Text Transfer Protocol.
// It is a communication protocol that defines how a client and a server exchange requests and responses over a network.

// CLient -The application requesting something, such as a browser or mobile app
// Server -The application that recieves requests ,processes them and sends responses.
// HTTP -The rules both side communicate like Methods, Headers, Status codes, Request and response bodies -Carry data  often in json format

// There are two main uses 
// Methods -http.createServer()  -Create a server that recieves http requests
//         -http.request()  -sends an http requests to another server

import http from "node:http";

const employeeData = {
    name: "jayanthvarma",
    id: 201,
    Department: "IT"
};

// Create the HTTP server
const server = http.createServer((req, res) => {
    if (req.url === "/employee" && req.method === "GET") {

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(employeeData));

    } else {
        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("Page not found");
    }
});

// Start listening for requests
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});


// Code ->	Meaning
// http.createServer()	-Creates the HTTP server.
// req	-Contains information about the incoming request.
// req.url	-Tells you which URL the client requested.
// req.method	-Tells you whether the request uses GET, POST, PUT, DELETE, etc.
// res.writeHead()	-Sets the HTTP status code and response headers.
// res.end()	-Finishes the response and sends its final data.
// server.listen(3000)	-Starts listening on port 3000.

// HTTP = communication protocol.
// node:http = Node.js module for HTTP communication.
// Express = framework built on Node.js HTTP functionality that simplifies backend development.

