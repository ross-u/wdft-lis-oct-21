const chalk = require("chalk");
const greetings = require("./greetings.js");

// console.log(`greetings`, greetings);

console.log(chalk.whiteBright.bgBlue.bold(greetings.pt));
console.log(chalk.whiteBright.bgBlue.bold(greetings.en));
