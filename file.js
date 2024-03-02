const fs = require("fs");
// console.log(fs);

// //Sync....blocking opr
// fs.writeFileSync("test1.txt", "Hello Mitroon!!!")

// //Async...non-blocking opr
// fs.writeFile("test2.txt", "Hello Guys!!!",(err)=>{})

// //Sync...
// const result = fs.readFileSync("./contact.txt","utf-8")
// console.log(result);

//Aync...
// fs.readFile("./contact.txt","utf-8",(err,result)=>{
//     if(err){console.log("Meri marzi nhi chala toh kya!!",err)}
//     else {console.log(result)}
// })
 
// //Sync
// fs.appendFileSync("./test1.txt","\n hello modi jii\n")

// fs.appendFileSync(".test2.txt", new Date().getTime().toLocaleString());

// fs.appendFileSync("./text2.txt",`\n ${Date.now()} hello from the server \n`)


//create the new file and copy data from old file 
// fs.cpSync("./contact.txt","./copy.txt") 

//delete new file
// fs.unlinkSync("copy.txt")

//Create new Folder
// fs.mkdirSync("my-docs")

