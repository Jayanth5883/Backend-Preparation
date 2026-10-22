// Modules & npm-  CommonJS, ESM, require/import, package.json, npm, package-lock

//Modules in node.js-A module is a reusable unit of code that contains related functionality,
//such as functions, variables, classes, or objects. 

// Node.js supports two main module systems: CommonJS and ECMAScript Modules.

// 1.Commonjs(cjs)----Commonjs is a module system in node.js that uses require() to import code or
// module.exports or exports to share code between files.
// // employee.js
// function getEmployee(){
//     return "employee details fetched"
// }
// module.exports=getEmployee;

// Method 1
// module.exports = getEmployee;
// Method 2
// exports.getEmployee = getEmployee;

// // app.js
// const getempdetails=require("./employee.js")
// console.log(getempdetails())

// /Method-2:-
// exports.greet = function () {
//     return "Hello";
// };
// exports.age = 24;

// const employee = require("./employee.cjs");
// console.log(employee.greet());
// console.log(employee.age);


// 2.ESM (ECMAScript modules)----ESM is the standard module system that uses export to share code and 
// import to acces code from another module 
// It is commonly used in modern javascript and node.js projects
// 1.Named export
// Employee.js
// export function getEmployee(basic,bonus) {
//     return basic+bonus ;
// }

// // app.js
// import { getEmployee } from "./employee.js";
// const salary=getEmployee(10000,2000)
// console.log(salary);

// 2.Default export
// export default class employ{
//     constructor(name){
//         this.name=name;
//     }
// }

// 4.Package.json--
// Package.json is the main configuration and meta data file for node.js project.
// It describes the Project, its Scripts, its Dependencies and other package settings.

// {
//   "name": "employee-project",       //Identifies the project/package
//   "version": "1.0.0",               //Records the project package version
//   "type": "module",                 //Controls how .js files are interpreted
//   "scripts": {                      //Defines commands that can be run with npm 
//     "start": "node app.js",         //Normal excution
//     "dev": "node --watch app.js"    //devlopment with automatic restarts
//   },
//   "dependencies": {                 //Lists packages needed by the application at runtime. 
//     "express": "^5.2.1"
//   }
// }
// devDependencies-      Lists packages used mainly during development and testing.          
// npm start excutes node app.js
// npm run dev starts  node --watch app.js-Which restart the application when watched files change.

// Install jest as a development dependency
// npm install --save-dev jest

// The npm init -y command creates a default package.json
// npm pkg set type=module  /type commonjs

// NPM -Node Package manager
// Def-is a package manager used with Node.js.It helps developers install ,update ,remove and
// manage third party packages and run project scripts.

// npm init -y                    -Create package.json
// npm install express            -Install express
// npm install                    -Install dependencies declared in the project 
// npm install --save- dev jest   -Install jest as a development dependency
// npm uninstall express          -Remove express
// npm update                     -Update installed dependencies within allowed version ranges
// npm start                      -Run the start script
// npm run dev                    -Run the dev script
// npm list                       -Display installed dependency information
// npm audit                      -Check dependencies for known security vulnerabilities

// 5. Package-lock.json- Records the exact resolved versions of the project dependency tree
//                       along with details like package source and intigrity infprmation.

// Resolved versions = exactly which versions were selected.
// Dependency tree = which packages depend on which other packages.

// {
//   "packages": {
//     "node_modules/express": {
//       "version": "5.2.1",       //Identify the resolved package version
//       "resolved": "https://registry.npmjs.org/express/-/express-5.2.1.tgz",     //Records the package-source
//       "integrity": "sha512-example"     //Helps npm verify the downloaded package contents 
//     }
//   }
// }