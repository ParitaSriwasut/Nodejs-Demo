const fs = require("fs");
const fsa = require("fs/promises");

//ReadFileSync
console.time("readFileSync");
let data1 = fs.readFileSync("./resource/dat01.txt", "utf-8");
console.log(data1);
let data2 = fs.readFileSync("./resource/dat02.txt", "utf-8");
console.log(data2);
let data3 = fs.readFileSync("./resource/dat03.txt", "utf-8");
console.log(data3);
let data4 = fs.readFileSync("./resource/dat04.txt", "utf-8");
console.log(data4);
console.timeEnd("readFileSync");

//Readfile : Callback asynchronous
console.time("readFileCB");
fs.readFile("./resource/dat01.txt", "utf-8", (err, data) => console.log(data));
fs.readFile("./resource/dat02.txt", "utf-8", (err, data) => console.log(data));
fs.readFile("./resource/dat03.txt", "utf-8", (err, data) => console.log(data));
fs.readFile("./resource/dat04.txt", "utf-8", (err, data) => console.log(data));
console.timeEnd("readFileCB");

//ReadFile : Promise asynchronous
console.time("readFilePromise");
fsa.readFile("./resource/dat01.txt", "utf-8").then((data) => console.log(data));
fsa.readFile("./resource/dat02.txt", "utf-8").then((data) => console.log(data));
fsa.readFile("./resource/dat03.txt", "utf-8").then((data) => console.log(data));
fsa.readFile("./resource/dat04.txt", "utf-8").then((data) => console.log(data));
console.timeEnd("readFilePromise");

fsa.readFile("./resource/dat01.txt", "utf-8").then((data) => console.log(data));
fsa.readFile("./resource/dat02.txt", "utf-8").then((data) => console.log(data));
fsa.readFile("./resource/dat03.txt", "utf-8").then((data) => console.log(data));
fsa.readFile("./resource/dat04.txt", "utf-8").then((data) => console.log(data));
