//const { default: chalk } = require("chalk");
const cowsay = require("cowsay");
const chalk = require("chalk");

console.log(chalk.blue("Hello"));

console.log(
  chalk.yellow(
    cowsay.say({
      text: "Codecamp15 too cute",
      e: "o o",
      T: "U",
      r: true,
    })
  )
);
