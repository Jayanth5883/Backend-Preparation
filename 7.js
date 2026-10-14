// Promise API's-        Promise.all, allSettled, race, any, error handling

// 1.Promise.all([])-wait for all promises to fullfill;rejects immediately if any single promise will fail
// Reject as soon as one promise rejects
// 2.Promise.allsettled()-wait for all promise to settle,returning an array summarizing the 
// success failure for each.----After all promise settle
// 3.Promise.race()-settles as soon as first promise settles(weather it will full fill or reject)
// 4.Promise.any()-resolves as soon as the first successfull promise fullfills
// Rejects only if all fail

// // 1.Promise.all([])
// const employepromise=Promise.resolve({
//     name:"jayanth",
//     id:24
// })
// const salarypromise=Promise.resolve(30000)
// const departmentpromise=Promise.resolve("IT")
// Promise.all([
//     employepromise,
//     salarypromise,
//     departmentpromise
// ])
// .then((result)=>{
//     console.log(result)
// })
// .catch((err)=>{
//     console.log(err)
// })

// // 2.Promise.allSettled()-When you want the outcome of the every operation,even if some fails.
// Promise.allSettled([
//     Promise.resolve("Employee loaded"),
//     Promise.reject("Api fetch failed"),
//     Promise.resolve("Department loaded")
// ])
// .then((result)=>{
//     console.log(result)
// })

// 3.Promise.race()-When you want the outcome of whichever promise settles first,Weather 
// It succeds or fails.
// const firstpromise =new Promise((resolve)=>{
//     setTimeout(()=>resolve("Employe api"),2000)
// })
// const secondpromise=new Promise((reject)=>{
//     setTimeout(()=>reject("Salary api"),1000)
// })
// Promise.race([firstpromise,secondpromise])
//     .then((result)=>{
//         console.log(result)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })

// // 4. Promise.any()-When you want the first successfull result from multiple promises.
// If all fails it returns an aggregateERROR

// Promise.any([
//     Promise.reject("Data cant fetch"),
//     new Promise((resolve)=>{
//         setTimeout(()=>resolve("data fetched successfully"),2000)
//     }),
//     new Promise((resolve)=>{
//         setTimeout(()=>resolve("data fetched 2nd time successfully"))
//     })
// ])
// .then((result)=>{
//     console.log(result)
// })
// .catch((err)=>{
//     console.log(err)
// })

// 5.Error handling -
function getSalary() {
    return Promise.reject("Database failed");
}

getSalary()
    .catch((error) => {
        console.log("Error:", error);
    });

// in express js 
// next() passes control to the next middleware or handler.
// next(error) forwards errors to error-handling middleware.
// app.get("/salary", async (req, res, next) => {
//     try {
//         const salary = await getSalary();
//         res.json({ salary });
//     } catch (error) {
//         next(error); // Pass the error to middleware
//     }
// });

// // Error-handling middleware
// app.use((error, req, res, next) => {          
//     console.error(error.message);

//     res.status(500).json({
//         message: "Internal server error"
//     });
// });
// Parameter	Meaning
// error	    The error passed using next(error).
// req	        Contains the incoming HTTP request details.
// res	        Sends a response back to the client.
// next	        Passes control to the next middleware or error handler.