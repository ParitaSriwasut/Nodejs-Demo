const fs = require("fs");

fs.readFile("./data.txt", "utf-8", (err, data) => {
  console.log("async read");
  console.log(data);
});

//readfilesync : none blocking for input/output they will run first no matter what.
let data = fs.readFileSync("./data.txt", "utf-8");
console.log(data);
