-> Before Node.js, JavaScript ran only in the browser. Many browsers have a JavaScript engine to execute the JavaScript code. We can’t execute JavaScript code outside of the browser because that requires a JavaScript engine. Some of the popular JavaScript engines used are V8 in Google, SpiderMonkey in Mozilla, and Apple engine in Safari.

-> One programmer, Ryan Dahl, took the V8 engine and embedded it with C++ and named it as Node.js, which helps us to run JavaScript outside of the browser and we can create our own web server using Node.js. It is a runtime environment for JavaScript.

-> To check whether Nodejs is installed in the device or not we can use the command: node --version or node -v
-> To use NodeJS we can use the command: node
-> npm stands for node package manager which gets downloaded along with the Nodejs to install the required dependency in our project.
-> To check the various commands of npm we can use the command: npm -V 
-> To check the version of npm we can use the command: npm -v

-> To run a file we use the command: node filename or node filename.js
-> We cannot perform the alert() and window, document objects in nodejs as nodejs works on the server and the DOM features are removed.
-> When we use the command: npm init 
-> It asks you various questions which will help you in making a custom package.json like name, description, version and all.
-> But when we use the command: npm init -y
-> It skips all the questions and generate a package.json for you as -y indicates yes to all default options.
-> We can create our own command to run the file by including it in the "scripts" of package.json.We can simply write inside the "scripts" as "Your_Given_Name":"node filename.js" EXAMPLE - "start":"node hello.js"
-> Now we can run your file by the command: npm start
-> package.json is a configuration file where we add information and dependencies of the project.

----------
-> Modules are the seperate blocks of code that are used in the application instead of writing it in one single file.
-> We can create a module of any name and can import it in other file using the require() 
-> For making the module usable we have to export that file using module.exports then only we can use the module.
-> We can export more than one function by using module.exports = {fun1, fun2,...}
-> For importing any module we can use: const variableName = require("./Filename")
-> ./ refers to the current directory where the file exists
-> We can access the methods of that module using variableName.MethodName()
-> We can also use const {fun1,fun2,...} = require("./FileName") [Object Desturcturing]
-> If we have imported the module like this we can directly use this as MethodName()
-> We can also use exports.FunctionName = (a,b) => a + b
-> When you are using module.exports do not use exports.FunctionName in one as this will throw an error
-> When we are writing const fs = require("fs"). NodeJs checks the in-bulit modules that 
are installed along with NodeJs.If you are using require("./FileName") it checks for the file in current directory

----------
-> In NodeJs, We have a FileSystem module where we can read, write and append in the files
-> We can use readFileSync() and readFile() for reading the files
-> When we use readFileSync("./Output.txt","utf-8")
-> We have to use an encoding technique to get the original data from the file otherwise it will return a buffer
-> When we use readFileSync() it stops everything untill the file is completely read.It blocks the entire program untill finished.
-> When we use readFile() it reads the file in background and let other code continue it does not block the entire program.It expects a callback function always and the return type is always void, it does not return anything.
-> Same with writeFileSync("file_name","data") , writeFile() and appendFileSync(), appendFile()
-> writeFileSync or any Sync functions are used only in snall one time operations.
-> writeFile or any async functions are used in backend servers for handling multiple requests.

----------
-> The architecture of Node.js consists of a client and a server. The client sends a request to the Node.js server. Inside the server, there is an Event Loop that continuously monitors incoming callbacks. The requests are processed through the Event Queue, and the Event Loop manages their execution.

-> The request can be of two types:
blocking operations and non-blocking operations.

-> If it is a non-blocking operation, it is sent to background workers (Thread Pool or OS Kernel). Once the operation is completed, its callback is placed into the Callback Queue, and the Event Loop pushes it to the call stack when free, then the response is sent back to the client.

-> If it is a blocking operation, it runs directly on the main thread, which can block the Event Loop until it finishes, preventing other requests from being processed.

-> JavaScript is single-threaded, but in Node.js, asynchronous operations are handled by the libuv Thread Pool, which consists of 4 worker threads by default, and the number can be increased according to CPU cores.

-> The Call Stack is where JavaScript executes code line by line.It runs synchronous (blocking) code.Only one function at a time can live at the top of the stack.If the stack is busy → NOTHING ELSE can run.Callback Queue holds async callbacks waiting for their turn.Event Loop connects them.

----------
-> NodeJs comes with a inbuilt module called as http which helps to create a server
using const VariableName = http.createServer((req,res)=>) which takes two parameters request and response. The res.end is used to show the value in the localhost:PortNumber and you can also get what are the headers content in the request by using req.headers. We can use a dedicated port using VariableName.listen(PortNumber).


