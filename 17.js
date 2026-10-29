// Error handling  -Validation, 400/401/403/404/500, centralized error handling

// 1.) Validation  -Validation is the process of checking weather the data recieved from a client is CORRECT and ACCEPTABLE before accepting it
// WHY do we use validation  -
// Data correctness -Prevent invalid data from entering your db
// Security  -Reject unexpected input and reduce certain input related tasks 
// Business rules  -Ensure salary, age, quantity, and other values follow your application's rules.
// Better error message  -Tell the client exactly what needs to be correct 

// Process -
// Client sends request -POST /employees with json data
// Express recieves the request  -Parse the json body
// Validate the input
// -valid data    ||  -Invalid data

// npm int -y
// npm install express

const express=require("express")   //Importing express frame work
const app=express()    //Creating express application

// app.use(express.json())   //Parsing the incoming request body

// app.post("/employees",(req,res)=>{
//     const {name,email,salary}=req.body

//     // validate name
//     if (!name || typeof name !=="string" || !name.trim()){
//         res.status(400).json({ message:"name is required"})
//     }
// // Validate email (basic format check)
// if (typeof email !=="string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
//     res.status(400).json({message:"valid email required"})
// }

// // Validate salary
// if (typeof salary !=="number" || !Number.isFinite(salary) || salary<0){
//     return res.status(400).json({
//         message:"salary must be non-negative number"
//     })
// }

// // If all validation pass
// res.status(201).json({message:"employee created successfully",
//     employee:{name,email,salary}
// })

// })
// app.listen(3000)


// Validation types  -
// Required ,Type ,Format ,Range ,Length ,Enum ,Uniqueness ,Business-rule validation.


// 2.) HTTP Status codes  -HTTP status codes are numbers that sent by the server to the client 
// to tell what happenend when it prossesed a request.
// 400 -Bad request  -Request contain invalid data or cannot be processed because of a client
// side input problem
// 401 -Unauthorized-valid authentication credentials have not been provided or invalid or no longer provided 
// 403 -Forbidden-The server understands the request but refuses to authorize the action
    //    -An authenticated employee tries to access admin-only endopint
// 404 -Not found -The requested source or endpoint cannot found 
// 500 -Internal server error
    //   -An unexpected database failure or an unhandled application error 

// 3.) Centralized error handling  -
// It means handling application errors in common place instead of writing separate error-response 
// logic throughout every route

// With centralized error handling ,routes pass errors to a common Express error-handling 
// middleware which decides how to format the response

// next(err)
// Telling the express.js to pass the error to error handling middleware 
// An express error-handling middleware has 4 parameters (err,req,res,next)

// Sample employee data
const employees = [
    { id: 1, name: "Ravi" },
    { id: 2, name: "Kiran" }
];

// Step 1: Define a route
app.get("/employees/:id", (req, res, next) => {
    const id = Number(req.params.id);

    const employee = employees.find(emp => emp.id === id);

    // Step 2: Pass errors to centralized handler
    if (!employee) {
        const error = new Error("Employee not found");
        error.status = 404;
        return next(error);
    }

    res.json(employee);
});

// Step 3: Handle unknown routes
app.use((req, res, next) => {
    const error = new Error("Route not found");
    error.status = 404;
    next(error);
});

// Step 4: Centralized error-handling middleware
app.use((err, req, res, next) => {
    console.error(err);

    const statusCode = err.status || 500;

    res.status(statusCode).json({
        message: statusCode === 500
            ? "Internal server error"
            : err.message
    });
});

// Step 5: Start the server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
