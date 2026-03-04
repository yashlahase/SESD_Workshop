import axios from "axios";
import chalk = require("chalk");

class Quote_Command {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command("quote")
            .description("Get a random inspirational quote")
            .action(() => this.getQuote());
    }

    async getQuote() {
        try {
            const res = await axios.get("https://zenquotes.io/api/random");
            const quote = res.data[0];
            console.log(chalk.green(`\n💬 "${quote.q}"`));
            console.log(chalk.yellow(`   - ${quote.a}`));
        } catch (err) {
            console.log(chalk.red("Error fetching quote"));
        }
    }
}

module.exports = Quote_Command;
