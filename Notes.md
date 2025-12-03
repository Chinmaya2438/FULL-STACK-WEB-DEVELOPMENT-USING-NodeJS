-> BEFORE NODEJS JAVA CRIPT RUNS ONLY IN THE BROWSER.MANY BROWSERS HAS JAVASCRIPT ENGINE TO EXECUTE THE JAVASCRIPT CODE WE CANT EXECUTE A JAVASCRIPT CODE OUTSIDE OF THE BROWSER BECAUSE
THAT REQUIRES A JAVASCRIPT ENGINE. SOME OF THE POPULAT JAVASCRIPT ENGINES USED ARE V8 IN GOOGLE, SPIDERMONKEY IN MOZILLA AND APPLE ENGINE IN SAFARI.

-> ONE PROGRAMMER RYAN DAHL TOOK THE V8 ENGINE AND EMBEDDED IT WITH C++ AND NAMED IT AS NODEJS WHICH HELPS US TO RUN JAVASCRIPT OUTSIDE OF THE BROWSER AND WE CAN CREATE OUR OWN
WEBSERVER USING NODEJS.IT IS A RUNTIME ENVIORNMENT FOR JAVASCRIPT

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
-> It skips all the questions and generate a package.json for you
-> We can create our own command to run the file by including it in the "scripts" of package.json.We can simply write inside the "scripts" as "Your_Given_Name":"node filename.js" EXAMPLE - "start":"node hello.js"
-> Now we can run your file by the command: npm start

