const chalk = require("chalk");
const pkg = require("../package.json");

console.log(`

${chalk.green("Salut! 👋")}

Thanks for giving Devsplan a try. 🎉
To get you going really quickly this project includes a setup step.

${chalk.yellow.bold(
  "npm run setup",
)} automates the following steps for you:
  - creates a config file ${chalk.yellow("./.contentful.json")}
  - imports ${chalk.green("a predefined content model")}

When this is done run:

${chalk.yellow(
  "npm run dev",
)} to start a development environment at ${chalk.green(
  "localhost:8000",
)}

or

${chalk.yellow(
  "npm run build",
)} to create a production ready static site in ${chalk.green(
  "./public",
)}

`);
