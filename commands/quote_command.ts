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
            const res = await axios.get("https://api.quotable.io/random");
            const quote = res.data;
            console.log(chalk.green(`\n💬 "${quote.content}"`));
            console.log(chalk.yellow(`   - ${quote.author}`));
        } catch (err) {
            console.log(chalk.red("Error fetching quote"));
        }
    }
}

module.exports = Quote_Command;
