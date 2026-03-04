import axios from "axios";
import chalk = require("chalk");

class Dog_Command {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command("dog")
            .description("Get a random dog image URL")
            .action(() => this.getDogImage());
    }

    async getDogImage() {
        try {
            const res = await axios.get("https://dog.ceo/api/breeds/image/random");
            console.log(chalk.blue("\n🐕 Random Dog Image:"));
            console.log(chalk.cyan(res.data.message));
        } catch (err) {
            console.log(chalk.red("Error fetching dog image"));
        }
    }
}

module.exports = Dog_Command;
