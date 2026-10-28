// Import express
const express=require("express")

// Create express application
const app=express()
app.use(express.json())

// 1. Middleware: log every incoming request
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

// Create a route 
app.get("/",(req,res)=>{
    res.send("Web home page")
})

// GET route -Reading data
app.get("/employees",(req,res)=>{
    const employees=[
        {id:707,name:"Jayanth",salary:9876876,department:"IT"},
        {id:708,name:"jayaram",salary:9876876,department:"IT"},
        {id:709,name:"Jagadeesh",salary:9876876,department:"IT"},
        {id:701,name:"Jayesh",salary:9876876,department:"IT"},
        {id:702,name:"Jaya",salary:9876876,department:"IT"},
        {id:703,name:"Varma",salary:987090,department:"IT"}
    ]
    res.json(employees)
})

// POST route -creating data
app.post("/employees",(req,res)=>{
    const employee=req.body;

    res.status(201).json({
        message:"employee was created successfully",
        employe:employee
    })
})

// Route parameters -(req.params)
app.get("/employees/:id",(req,res)=>{      //is a named route parameter
    const employeeId=req.params.id;

    res.json({
        message:"employee details",
        id:employeeId
    })
})

// Query parameters -(req.query)
app.get("/employees", (req, res) => {
    const department = req.query.department;
    const limit = Number(req.query.limit || 10);

    res.json({
        department,
        limit
    });
});

// PUT -Replace an employees data 
app.put("/employees/:id",(req,res)=>{
    res.json({
        message:"Replaced the user",
        id:req.params.id,
        newData:req.body
    })
})

// PATCH -Partially update an employee
app.patch("/employees/:id",(req,res)=>{
    res.json({
        mesage:"Updated selected files",
        id:req.params.id,
        changes:req.body
    })
})

// DELETE -Delete an employee
app.delete("/employees/:id",(req,res)=>{
    res.json({
        message:"Dleted selected employee",
        id:req.params.id,

    })
})





// Start the server
app.listen(3000,()=>{
    console.log("http://localhost/3000")
})