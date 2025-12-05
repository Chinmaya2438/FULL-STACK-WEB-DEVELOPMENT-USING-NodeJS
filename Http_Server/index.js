const http = require("http")
const fs = require("fs")

const myServer = http.createServer((req,res)=>{
    const log = `${req.url} ${Date.now()}\n`
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(req.url){
            case '/home': res.end("Hello from Home")
            break
            case '/about': res.end("Hello from About")
            break
            default: res.end("Hello from Server")
        }
    })
    
})

myServer.listen(8000,()=>console.log("Server is RUnning"))