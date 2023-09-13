const path = require("path");

console.log(__dirname);

let thePath = __dirname + "/go/to/text.txt";
console.log(thePath);
console.log(path.dirname(thePath));
console.log(path.basename(thePath));
console.log(path.extname(thePath));

//Best way
let p1 = path.join(__dirname, "data", "user");
console.log(p1);
console.log(path.resolve("data", "user"));
