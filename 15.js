// Express basics -Express app, routes, middleware, request, response
// Express.js -Is a web frame for node.js that makes it easier to build web servers and API's.
// Node.js provides built-in tools to create a HTTP server .Express adds convenient features for handling Routes ,Requests ,Responses
// ,Middleware and Errors

// Without express you can create server using BUILT IN NODE.JS HTTP MODULE. but you need to handle URL matching ,HTTP methods ,Req bodies.
// With express you can write.
// app.get("employees/6",(req,res)=>{
//     res.json({message:"All employees"})
// })

// app -your express application 
// .get -Handles the GET requests
// employee/6 -The URL path 
// req -Information about the incoming requests
// res -Tools to send the response
// res.json() -Sends a JSON response

// 1.) Express app -Creating your backend server
// What is an express app?
// Express app is the main object you create to configure your backend .It lets you register routes ,Use middleware ,
// Configure error handling ,and start accepting http requests through your node.js http server.

// npm install express  -Installs Express into your project.

// The URL
// http://          localhost:3000         /
// Protocol         Server and port        Root path 

// 2.)How excution works -
// Client -Browser Frontend or postman      
// Express server -Listening on port 3000
//Route matching -GET / matches app.get("/")
//Response - console in the express app

// 3.)Routes in express -A route defines what server should do when the request matches a particular http method and url path .
// Route syntax -app.METHOD(path,handler)
// app -Express application
// Method -http methods 
// Path -URL path 
// Handler -Function that processes the request.

// const express=require("express")  //Importing the express
// const app=express()     //creating express application

// 
// 1.app.get("/employees", (req, res) => { //A Client sends get employee 2Express finds the matching route 3HAndlers create an array of employe object 
//   const employees = [        
//     { id: 1, name: "Ravi", salary: 30000 },
//     { id: 2, name: "Priya", salary: 40000 }
//   ];
//   res.json(employees);     // Sends the array as the json response.
// });

// 1.2 Route parameters -req.params
// app.get("/employees/:id",()=>{
    // const employeeId=req.params.id
    // })

// 1.3 Query parameters -req.query
// app.get("/employees",()=>{
    // const department=req.query.department;
    // const limit=Number(req.query.limit || 10)
// })

// 2. app.post("/employees",()=>{
    // res.status(201).json({})

// 3. app.put("/employees/:id")
// 4. app.patch("/employee/:id")
// 5. app.delete("/delete/:id")

//4.)  Middleware in express -we can use it in Authentication ,Logging ,Validation ,Error handling and many other backend tasks.
// Middleware is a function that runs during the request response cycle and can inspect or modify the request and response,
// end the response or pass the control to the next middleware.

//Think of middleware as a security check point at the office.

// Basic middleware syntax -
// app.use((req,res,next)=>{
  // console.log("MW ")
  // next();   //Passes control to the next applicable middleware or route handler
// })

//(1.) LOGGING MIDDLEWARE -

const express=require("express")
const app=express()
// app.use((req,res,next)=>{
//     console.log(req.method,req.url)
//     next()
// })
// app.get("/employee",(req,res)=>{
//     res.send("Employee list")
// })
// app.listen(3000,()=>{
//     console.log("http://localhost:3000")
// })

// (2.) JSON middleware -
// // Parsed body -Means converting the data sent by the client in to format that express can understand and use in your code.

// app.use(express.json())

// app.post("/employee",(req,res)=>{
//     console.log(req.body.name)
//     res.send("Emplpoyee added")
// })
// app.listen(3000)

// (3.) Authentication middleware -
function checkAuth(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            message: "Required authorization"
        });
    }
    next();
}
// Middleware is applied here
app.get("/employee", checkAuth, (req, res) => {
    res.json({ message: "Fetched employee details" });
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});


// Types of middleware  -(IN middleware order matters)
// Application level -app.use()  -Runs across matching request in the app
// Router level -router.use(),app.use()  -Applies middleware to the group of routes
// buil-in -express.json()  -Parses the json request bodies
// third-party -cors()  -Adds functionality from the packages 
// ERror-handling -(err,req,res,next)  -Handles errors passed to the express

// 5.) Requests and Responses -Every route handler commonly recieves two important objects.
// req-incoming http request &res-outgoing http response

app.post("/employees/:ID",(req,res)=>{
    res.status(200).json({message:"hello"})
})

// Req methods
// req.params -Values from route parameters  {id:"5"}
// req.query  -Query-string values {?role="IT"&page="2"}
// req.body  -Parsed request body  {name:"ravi"}
// req.headers  -HTTP request headers authorization ,contetnt type
// req.method  -HTTP methods CRUD
// req.url  -Request url generally including query string "/employees?page=5"
// req.path  -path portion of the url  "/employees"
// req.cookies  -Parsed cookies if suitable cookie-parsing middleware is installed  DEPENDS ON req

// Res methods
// res.send()  -Sends a response such as text or object
// res.json({})  -sends a json response
// res.status()  -sets the HTTP status code 
// res.set()  -Sets a response header
// res.redirect()  -sends a redirect response
// res.sendstatus()  -sets a status and sends it standard status text 
// res.cookie()  -Sets a cookie in the response when used appropriately

// Send text
// res.send("Hello");
// Send JSON
// res.json({ name: "Ravi" });
// Send a status code and JSON
// res.status(201).json({ message: "Created" });

// Error handling middleware
// A error handling middleware has four parameters 
app.use((err,req,res,next)=>{
    console.log(err)
    res.status(500).json({
        mesage:"Internal server error"
    })
})

// Express router -express.Router() creates a separate router for grouping related routes.
// router.get("/") handles a GET request at the router's base path.
// router.get("/:id") handles a GET request containing an employee ID.
// router.post("/") handles a POST request to create an employee.
// module.exports = router makes the router available to other files.

// app.use() is mainly used to register middleware that can run for multiple requests and routes.(Middleware)
// app.get() is used to handle HTTP GET requests for a specific path.(http methods)

// 1. The client sends an HTTP request.
// 2. Express receives it through the server.
// 3. Matching middleware executes in order.
// 4. Express matches a route.
// 5. The handler reads req, performs the required logic, and uses res to send the response.
// 6. Errors are handled by appropriate error-handling middleware.