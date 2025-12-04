const fs = require("fs")
const os = require("os")

console.log(os.cpus().length)


fs.writeFileSync("./test.txt","Hello I am Chinmaya Panda")

fs.writeFile("./test.txt","Hello I am Chinmaya",(err)=>{})

console.log("2")
const result = fs.readFileSync("./contacts.txt","utf-8")
console.log(result)
console.log("5")


console.log("Hello World")
fs.readFile("./contacts.txt","utf-8",(err,result)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(result)
    }
})
console.log("Chinmaya")

fs.appendFileSync("./contacts.txt","Hello There")

fs.cpSync("./contacts.txt","./copy.txt")

fs.unlinkSync("./copy.txt")

console.log(fs.statSync("./contacts.txt"))

// fs.mkdirSync("My-Docs")

