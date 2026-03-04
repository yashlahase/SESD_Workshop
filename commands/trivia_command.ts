import axios from "axios";
import chalk = require("chalk");

class Trivia_Command {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command("trivia")
            .description("Get a random trivia question")
            .action(() => this.getTrivia());
    }

    async getTrivia() {
        try {
            const res = await axios.get("https://opentdb.com/api.php?amount=1&type=multiple");
            const trivia = res.data.results[0];
            console.log(chalk.blue(`\n❓ ${this.decodeHTML(trivia.question)}`));
            console.log(chalk.yellow(`Category: ${trivia.category}`));
            console.log(chalk.green(`Difficulty: ${trivia.difficulty}`));
            console.log(chalk.cyan(`\nAnswer: ${this.decodeHTML(trivia.correct_answer)}`));
        } catch (err) {
            console.log(chalk.red("Error fetching trivia"));
        }
    }

    decodeHTML(html: string) {
        return html.replace(/&quot;/g, '"')
                   .replace(/&#039;/g, "'")
                   .replace(/&amp;/g, '&');
    }
}

module.exports = Trivia_Command;
