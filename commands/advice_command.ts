import axios from "axios";
import chalk = require("chalk");

class Advice_Command {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command("advice")
            .description("Get random advice")
            .action(() => this.getAdvice());
    }

    async getAdvice() {
        try {
            const res = await axios.get("https://api.adviceslip.com/advice");
            console.log(chalk.green(`\n💡 ${res.data.slip.advice}`));
        } catch (err) {
            console.log(chalk.red("Error fetching advice"));
        }
    }
}

module.exports = Advice_Command;
