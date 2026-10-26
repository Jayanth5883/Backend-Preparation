// Streams -Readable, Writable, Duplex, Transform, buffers, Pipe ,Pipeline

// Buffers — understand how Node.js handles binary data.
// Streams introduction — understand chunks and why streams exist.
// Readable — read a file chunk by chunk.
// Writable — write data chunk by chunk.
// Duplex — read and write.
// Transform — modify data while it flows.
// pipe() and pipeline() — connect streams together.

// 1 .  Buffer -A buffer is a temporary area of memory used to store biunary data(raw bytes)
// Computers store files such as images, videos, PDFs, and audio as bytes. Node.js uses buffers to work with this data.
// For example, when Node.js reads an image file, it can represent the image's contents as a Buffer.

// 1. What are bytes?--- A computer stores file data as binary digits (0 and 1). A group of 8 bits is called a byte.

// IMAGE-An image file contains encoded information describing things such as pixels, colors, and image dimensions. 
// A Buffer stores its bytes. An image decoder interprets those bytes to display the picture.

// Audio -An audio file contains encoded audio data and metadata. A Buffer holds its bytes. 
// An audio decoder interprets those bytes to produce sound.

// Where do we use buffers ?
// REading images,vedios and pdf's
// Handling file uploads and downloads
// Processing data recieved through HTTP requests
// Working with streams, Which often deliver data in chunks of bytes 

const data =Buffer.from("Hello node.js")  //Converts the string into a buffer

console.log(data)    //The hexadecimal values represent the bytes of the text ,Displays the bytes in the hexa decimal 
console.log(data.toString())    //Converts the bytes back into readeble text
console.log(data.length)     //Returns the number of bytes stored

// buffer.concat() -combines multiple buffers
// Usefull when you need to combine chunks of data 
const first = Buffer.from("Hello ");
const second = Buffer.from("Node.js");
const result = Buffer.concat([first, second]);
console.log(result.toString());

  
// Method	           Purpose
// Buffer.from()	   Create a Buffer from existing data
// Buffer.alloc()	   Create a zero-initialized Buffer
// Buffer.concat()	   Combine Buffers
// Buffer.byteLength() Calculate the byte size of text
// buffer.toString()   Convert Buffer data into text

//2 .   Streams- A stream let node.js process data gradually,instead of loading the entire data source into the memory at once 
// read a small chunk, Process that chunk, REad the next chunk.
// A chunk is one piece of data, Buffer, String, or object describes the type of data that piece contains.

const fs=require("node:fs")
const stream= fs.createReadStream("report.txt",{highWaterMark:20}) //To read data in file sequentially in chunks rather than loading entire file in to memory once.

stream.on("data",(chunk)=>{   //Tells node.js to run a function whenever stream emits data event,CHUNK is the call back function
    // console.log("Reacived chunk"+chunk.length+"Bytes")
    console.log("content",chunk.toString())})   //Chunk contains the data recieved in that event
stream.on("end",()=>{
    console.log("Finished reading file")})
stream.on("error",(err)=>{
    console.error(err)})

// "data" — when you want to process incoming chunks.
// "end" — when you want to do something after reading finishes.
// "error" — when you want to handle errors.
// "close" — when you want to do something after the stream closes.

// 3 .  Readeble streams -Reading the data 
// A Readeble stream is a source from which data can be read.
// Reading a file ,http request ,user input.

// 4 .  Writeble streams -Writeable data
// A Writeable streame is a destination to which data can be written 
// Writing to a file, Sending HTTP response, sending data to another output destination

const writing =fs.createWriteStream("report.txt")

writing.write("I am writing from the vs code by the writeble stream \n")
writing .end("Writing completed")
writing.on("finish",()=>{
    console.log("All data has been finished writing")
})
 writing.on("error",(err)=>{
    console.log(err)
 })

//  write() sends data to the stream.
// end() indicates that no more data will be written.
// finish fires when all data has been processed by the writable stream.
// Backpressure?  -Suppose your program produces data faster than the file or network can accept it.
// if (!writable.write(data)) {
//   // Wait for "drain" before writing more
//   writable.once("drain", () => {
//     console.log("Ready for more data");
//   });
// }

// 5 .  Duplex streams Reading and Writing
// It can Recieve and Send data independently
// Some network connections, Other Two way communication channel
// ->Writing data                              Reading data->
//                   Duplex connection (Data can flow in both Directions)

// Client(Sends a message)<->Socket connection (Transfers data)<->Server(Receives the message) .net to interact with network sockets \
// const net =require("node:net")
// const socket=net.connect(3000,"localhost")

// socket.on("connect",()=>{
//     socket.write("hello server")
// })

// socket.on("data",(chunk)=>{
//     console.log("Data Recieved",chunk.toString())
// })

const { Duplex } = require("node:stream");

const duplex = new Duplex({
  read(size) {
    // Provide data to be read
    this.push("Hello from readable side");
    this.push(null); // No more data
  },

  write(chunk, encoding, callback) {
    // Handle incoming data
    console.log("Received:", chunk.toString());
    callback();
  }
});

// 6 .  Transform streams -Changing data as it flows
// A Tranceform stream is a special type of duplex stream it reads input,transforms it and produces output.
// Transform is a built-in Node.js stream class that lets you receive data, modify it, and produce new data.
// Comnpressing files, Decompressing files, Encrypting data, Converting text to uppercase, Processing or filtering data.

const {Transform}=require("node:stream")

const upperCase=new Transform({
    transform(chunk,encoding,callback){     //Automatically calls this method whenever input data is written to the stream 
                                            //Chunk -The incoming piece of data, Usually a buffer.
                                            //Encoding -Converts raw binary data into(bytes in buffer)into readable text format
                                            //Callback -A function you call when you finsh processing the chunk 
        const result=chunk.toString().toUpperCase()   //chunk.toString -Converts the buffer into Text.
        callback(null,result)  //tells nodejs processing is complete and there was no error(null),Second argument (result is the transformed data )
                               //That the stream should output
    }
})
upperCase.on("data",(chunk)=>{      //.on("data",..) Listen for output chunks from the transform stream
    console.log(chunk.toString())
})
upperCase.write("jayanthvarma")
upperCase.end("k")

const { Transform } = require("node:stream");

const transform = new Transform({
  transform(chunk, encoding, callback) {
    // Modify the incoming chunk
    const result = chunk.toString().toUpperCase();

    callback(null, result);
  }
});

// 7 .  Pipe() -Connecting streams
// Connects a readable strem to a writeable stream so data flows automatically from the source to the destination.
// Instead of manually reading each chunk and writing it, Node.js manages the flow and applies backpressure

// readableStream.pipe(writableStream);

const readable = fs.createReadStream("report.txt");
const writable = fs.createWriteStream("sample.txt");

readable.pipe(writable);

// 8 .  Pipeline() -connecting streams safely
// Pipeline connects two or more streams and helps handle errors and cleanup
// It is generally preferred to stream processing tasks where you need to know weather the whole operation succeded or failed

const zlib=require("node:zlib")   //Compresses and decompresse data 
const {pipeline}=require("node:stream")   //pipeline — connects streams together and handles errors and completion.
pipeline(      
    fs.createReadStream("report.txt"),  //Reads report.txt in chunks instead of loading entire file into memory
    zlib.createGzip(),   //Compress data-Create transform stream it recieves the chunks and compresses their data & outputs compressed chunks
    fs.createWriteStream("report.txt.gz"), //Creates a writable stream that saves the compressed data into a new file named input.txt.gz.
    (err)=>{
        if(err){
            console.error(err)
        }else{
            console.log("compression completed")
        }
    }
)


// const { pipeline } = require("node:stream");

// pipeline(
//   readableStream,
//   transformStream, // optional
//   writableStream,
//   (err) => {
//     if (err) {
//       console.error("Pipeline failed:", err);
//     } else {
//       console.log("Pipeline completed!");
//     }
//   }
// );
// pipeline(readable, transform, writable, callback);

// Data flows from the readable stream into the compression stream.
// Compressed data flows into the writable stream.
// It handles stream errors and calls the final callback when the operation finishes or fails.

// We compress files to reduce their size, so they take less storage space and can be transferred faster.
