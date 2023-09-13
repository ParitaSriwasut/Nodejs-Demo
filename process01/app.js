console.log(process.env.USER);
console.log(process.env.HOME);
console.log(process.platform);

console.log(process.env.AAA);

process.env.AAA = "馬鹿";
console.log(process.env.AAA);
