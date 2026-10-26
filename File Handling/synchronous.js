const fs = require("fs");


fs.writeFileSync("data.txt", "Hello World! Learning Synchronous file handling in Node.js");

const data = fs.readFileSync("data.txt", "utf-8");

console.log("File Content:");
console.log(data);