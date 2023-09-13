const { random, sysInfo, cc } = require("./utils");

for (let i = 0; i < 10; i++) {
  console.log(random());
}
console.log(sysInfo());
console.log(cc);
