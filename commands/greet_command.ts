import chalk = require("chalk");

class Greet_Command {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command("greet <name>")
            .description("Greet someone by name")
            .action((name) => this.sayHello(name));
    }

    sayHello(name: string) {
        console.log(chalk.green(`\n👋 Hello, ${name}!`));
    }
}

module.exports = Greet_Command;



