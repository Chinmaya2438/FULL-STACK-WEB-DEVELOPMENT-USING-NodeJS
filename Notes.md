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
-> It asks you various questions which will help you in making a custom package.json like
name, description, version and all.
-> But when we use the command: npm init -y
-> It skips all the questions and generate a package.json for you as -y indicates yes to all default options.
-> We can create our own command to run the file by including it in the "scripts" of package.json.We can simply write inside the "scripts" as "Your_Given_Name":"node filename.js" EXAMPLE - "start":"node hello.js"
-> Now we can run your file by the command: npm start
-> package.json is a configuration file where we add information and dependencies of the project.
