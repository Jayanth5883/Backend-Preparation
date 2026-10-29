// REST API DESIGN   -GET, POST, PUT, PATCH, DELETE, params, query, body

const { application } = require("express")

// 1.)What is rest api -
// Rest api -Representational State Transfer
// A rest api is a way for client and a server to communicate using http methods and urls to work with resources such as employees ,
// products ,users or orders.

// The frontend want to fetch employee details 
// the backend recieves the http request 
// the backend retrieves employee data from the data base 
// the backend sends the response to the frontend through JSON http response 

// # Why we use REST API -
// REST style design also makes API's easier to maintain ,test ,document and use across different clients .

// HOW does rest api work 
// 1. Client sends a request 
// http://localhost:3000/employee/Id
// 2. express matches the route 
// js   app.get("/employee/:id,Handler")
// 3. Backend processes the request 
// The controller reads the ID ,check weather the employee exists and retrives the data from the database 
// 4. Server sends a response 
// {"id":902,"name":"jayanth varma"}
// 5. Client recieves the result 
// The frontend can display ravi's employee details 

// # GET -Retrive data 
// EX end points -GET /employees (Retrive all employees)
//               -GET /employees/7 (Retrives the employee who's id is 7)
// Express syntax -app.get("/employee/:id",(req,res)=>{   
    // res.status(200).json({message:"Fetched the employee details succesfully"})    
// })
// app.get() -registers a route for get requests.

//# POST -create new data
// Example request -POST /employees
            //     -Content-Type:application/json

//  Request body   -{"name":"jayanth varma","ID":707}

// Express syntax  -app.use(express.json());
                    app.post("/employee",(req,res)=>{
                        const employee=req.body
                        res.status(200).json({message:"Created employee successfully",
                                              employ:employee
                        })  
                    })
//# PUT -Replace an existing resource (Replace resource)

// Express syntax  -
app.put("/employee/:id",(req,res)=>{
    const id=req.params.id       //Reads that  id 
    const updatedemp=req.body

    res.status(200).json({message:"employee updated successfully",
        newData:updatedemp
    })  })

//# PATCH -PArtially update a resource(change selected fields)
// Change only the fileds that the client want to update
    // PATCH http://localhost:3000/707
    // Content-Type -application/json
    // Body -{"salary":6000}

// Express syntax -
app.patch("/employee/:id",(req,res)=>{
    const id=req.params.id
    const changes=req.body

    res.status(200).json({message:`Partially updated the employee${id} `,
    patchedEmp:changes})
})

//# Delete -Delete an resource
// DELETE /employees/101

// Express syntax -
app.delete("/express/:id",(req,res)=>{
    const id=req.params.id
    res.status(200).json({message: `Deleted succesfully the ${id}`})
})

// # What are route parameters ,request parameters ,req body.
// # Route params -req.params  (Identify a particular resource or part of a URL path)
// The :id is a named route parameter .When the client requests /employee/:id .Express assigns "101" to req.params.id

// # Query params -req.query  (Filter,search,sort or Paginate a collection)
// GET /employees/:id?role=developer&salary=500000

// Express route -
app.get("/employees/:id",(req,res)=>{
    res.status(200).json({message:req.query.role,
    mssg1:req.query.salary
    })})
// #Request body -req.body (Sends the data that the server need to create or update the resource)
app.use(express.json())
app.get("/express",(req,res)=>{
    res.status(200).json({name:req.body.name,
    age:req.body.age
    })
})

// GET /employees/101?includeSalary=true

// app.get("/employees/:id", (req, res) => {
//   console.log(req.params.id);
//   console.log(req.query.includeSalary);

//   res.json({ message: "Request received" });
// });

