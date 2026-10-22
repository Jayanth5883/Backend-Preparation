// 1 .  Create the project folder-
//  cd D:\    -Moves to the root of your d drive
//  mkdir project-name    -Creates the project folder
//  cd projectname    -moves inside the project folder
//  code .    -open the current folder in the vs code

// 2 .  Initialize the Node.js project.
// npm init -y    -This creates package.json
// Package.json -Is project configuration file.It stores info like name,scripts,dependencies,version
// type

// 3 .  Install the required packages
// Package    Purpose
// express    -creates the HTTP server and API routes     
// pg         -connects node.js to postgreSQL
// dotenv     -Load coonfiguration values from a .env file

// You do not need to install fs, path, or http separately because Node.js provides built-in modules for those features.

// After installation you will see you'ill see two important additions
// node_modules/ --Contains installed packages.
// Package-lock.json --Contains the exact versions of the installed packages and their dependency information

// Create the project folder structure
// mkdir src            
// mkdir src\routes        -Defines the API URLs and HTTP methods.
// mkdir src\controllers   -Handles the request and response.
// mkdir src\services      -Contains business logic and database operations.
// mkdir src\middleware    -Handles common requests processing and errors, Authentication, validation, error handling
// mkdir src\config        -holds configuration such as database connections.
// mkdir src\repositories  -Database queries (Optional for small project)
// mkdir tests             -Contains automated tests.

// Create initial files
// // New-Item src\app.js   -New-Item creates a new file or folder.
//                           src\app.js creates the app.js file inside the src folder.
//                           Important: The src folder must already exist.
//                           #Contains your Express application configuration, middleware, and routes.
// New-Item server.js       -New-Item server.js
                        //  Creates server.js in your project's root directory.
                        //  This file starts your Node.js server.      
                        //   #Starts the HTTP server and tells it which port to listen on. 
// New-Item .env -.env file separates configuration from code, allowing different developers to use different local credentials.
                  //Don't share this file or commit it to git

// New-Item .gitignore   and add these:-  // node_modules/
                                          // .env
                                          // coverage/
                                          //npm-debug.log*
//? Git should not track installed dependencies, private credentials, or generated test output.

// 4.  Create the postgre sql data base-CREATE DATABASE employee_db;

//5 .  COnfigure the data base connection
// CReate the file and add

import "dotenv/config";
import pg from "pg";
const { Pool } = pg;
const pool = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});
export default pool;

// 6.  Run your project-   npm start


// 1. Understand the project requirements
// -Decide what your application should do 

// 2. Design the data base
// -Decide what information you need to store and create the postgre sql table
// -Your backend needs a defined structure for storing and retreving the data 

// 3. Connect Node.js to postgre sql 
// In the src/config/db.js

// 4. Plan your API end points
// Decide which URL's and http methods your application needs.
// Method     End Point                Purpose
// put        /api/employee/:id       Update employee

// 5. Implement the api's
// Depending on your architecture Put the logic directly in the Route handlers or separate it into
// controllers and services.

// 6. Add validation and error handling 
// Handle errors and unexpected failures.

// 7. Test the API's 
// Use the post man to succesful requests and failures.

// Requirements analysis — Understand what the application must do.
// Project architecture and design — Decide the folder structure, layers, technologies, and how components communicate.
// Database design       — Design tables, relationships, constraints, and indexes.
// Database connection   — Configure the database and verify connectivity.
// API design — Define endpoints, HTTP methods, request bodies, responses, and status codes.
// API implementation — Implement routes, controllers, services, and database queries as appropriate.
// Validation and error handling — Validate input and handle expected and unexpected errors.
// Authentication and authorization — Add these when required to protect resources and control access.
// Testing — Test individual functions, APIs, database interactions, and integration scenarios.
// Security and performance — Review permissions, secrets, rate limits, query performance, and other relevant risks.