// CLI project -1.process.env, 2.npm scripts, 3.configuration
// (Controlling how a project behaves without changing its code)

// CLI -Is a way of controlling computer by typing text commands instead of clicking icons and menus.
// CLI -Lets you type commands.

// Shell vs Terminal
// The terminal is the window where you type.The Shell(Bash,Power shell) is the programm inside it 
// That reads your command and runs it .Terminal is the screen and shell is the brain 

// Command pattern - command -option target
// Command: the action (ls)
// Option/flag: changes how it behaves (-l for detailed view)
// Target: what to act on (Documents)
// Lists the document folder in detail.

// Path shortcuts
// . Current folder, .. Parent folder, ~ Home folder

// 1. Process.env (Environment variables)
// A built in node.js object that holds setting from outside your code like passwords,API keys,port numbers(Production and Development)
// Your code is a machine, and process.env is its control panel of switches.
// You change the switches without rebuilding the machine.

// SEt environment variables on Windows power shell.
// $env:NODE_ENV="development"
// $env:PORT="3000"
// process.env.USER_NAME reads the environment variable,|| "Guest" provides a fallback when the value is missing or empty.

// Environment variables with .env file
// .env File lets you store development configuration in a local file 
// NODE_ENV=development
// PORT=3000
// USER_NAME=Jayanth

// In modern Node.js versions that support the --env-file option, run:node --env-file=.env app.js

// console.log(process.env.NODE_ENV);
// console.log(process.env.PORT);
// console.log(process.env.USER_NAME);

// npm install dotenv

// require("dotenv").config();
// console.log(process.env.PORT);

// 2.npm scripts
// Shortcuts for commands, Stored in the scripts section of package.json.You give a long command a short name 
//Analogy: Like speed-dial on a phone. Instead of typing the whole number, you press one button.

// {
//   "scripts": {    //Contains your custom commands 
//     "script-name": "command-to-run"    //"Script-name"-is the name you choose
                                          //"command to run"-is the terminal command npm executes 
//   }
// }

// {
//   "scripts": {   
//     "start": "node app.js",    //Run your application, Built in shorthand
//     "dev": "node --watch app.js",   //Automatically restart when code changes
//     "test": "node --test",   //Run automated tests, Built in shorthand 
//     "check": "node --check app.js"    //Check java script syntax
//   }
// }

// Passing aguments to npm scripts
// const args=process.argv    //Read arguments supplied through the terminal 
// console.log(args)
// console.log(args[3])

// process.argv[0]	node.exe path	Node.js executable location
// process.argv[1]	13.js path	Your JavaScript file
// process.argv[2]	--name	First custom argument
// process.argv[3]	jayanth	Second custom argument


// 3. Configuration in a CLI project
// The settings that control how your application behaves,Usually kept in files separate from the logic
// Analogy: The settings menu of an app. The app’s features stay the same, but you tune how it works.

// Common config files-
// npm init starts the process of creating a Node.js project configuration file.
// -y accepts the default answers automatically.
// package.json -Project info, dependencies, scripts
// .env  -secret and environment-specific values 
// tsconfig.json -TypeScript rules
// config.json -Your own app settings

// process.env = switches from outside
// npm scripts = speed-dial for commands
// Configuration = the settings menu
// CLI project = a tool you run by typing

console.log("Environment:", process.env.NODE_ENV);
console.log("Port:", process.env.PORT);
console.log("User:", process.env.USER_NAME);