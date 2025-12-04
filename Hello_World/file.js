const fs = require("fs")

fs.writeFileSync("./test.txt","Hello I am Chinmaya Panda")

fs.writeFile("./test.txt","Hello I am Chinmaya",(err)=>{})

const result = fs.readFileSync("./contacts.txt","utf-8")
console.log(result)

fs.readFile("./contacts.txt","utf-8",(err,result)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(result)
    }
})


fs.appendFileSync("./contacts.txt","Hello There")

fs.cpSync("./contacts.txt","./copy.txt")

fs.unlinkSync("./copy.txt")

console.log(fs.statSync("./contacts.txt"))

fs.mkdirSync("My-Docs")

