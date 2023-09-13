require("dotenv").config();

console.log("APIKEY =", process.env.APIKEY);
console.log("APIKEY =", process.env.TITLE);

console.log(process.env.AVG_NUM);
console.log(process.env.ADMIN);

console.log(typeof process.env.ADMIN);

let admin_obj = JSON.parse(process.env.ADMIN);
console.log(admin_obj);
