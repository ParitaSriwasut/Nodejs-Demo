const { error } = require("console");
const fs = require("fs");
const datFile = "./dat01.txt";

//instead of writing const outputPromise we also can return new Promise!
// function readFilePromise() {
//   const outputPromise = new Promise((resolve, reject) => {
//     fs.readFile(datFile, "utf-8", (err, data) => {
//       if (err) return reject(err);
//       console.log("accepted..");
//       return resolve(data);
//     });
//   });
//   return outputPromise;
// }
// readFilePromise().then((data) => {
//   console.log(data);
// });

//Error case
const output = new Promise((resolve, reject) => {
  fs.readFile(datFile, "utf-8", (err, data) => {
    if (err) return reject(err);
    console.log("accepted..");
    return resolve(data);
  });
});

//output.then((data) => console.log(data));
//shot cut
output.then(console.log).catch((err) => console.log(err.code));
