const fs = require("fs");


fs.writeFile("datafile.txt", "Hello World! Learning asynchronous Node.js", (err) => {
  if (err) throw err;

  console.log("File written successfully");

 
  fs.readFile("data.txt", "utf-8", (err, data) => {
    if (err) throw err;

    console.log("File Content:");
    console.log(data);
  });
});

console.log("Program executed successfully");
console.log("You're at the end of the program")
