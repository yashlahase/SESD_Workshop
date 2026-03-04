import axios from "axios";
import chalk = require("chalk");

class Github_Command {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command("github <username>")
            .description("Get GitHub user information")
            .action((username) => this.getUserInfo(username));
    }

    async getUserInfo(username: string) {
        try {
            const res = await axios.get(`https://api.github.com/users/${username}`);
            const user = res.data;
            console.log(chalk.blue(`\n👤 GitHub User: ${user.login}`));
            console.log(chalk.yellow(`Name: ${user.name || 'N/A'}`));
            console.log(chalk.green(`Bio: ${user.bio || 'N/A'}`));
            console.log(chalk.cyan(`Public Repos: ${user.public_repos}`));
            console.log(chalk.magenta(`Followers: ${user.followers}`));
            console.log(chalk.white(`Profile: ${user.html_url}`));
        } catch (err) {
            console.log(chalk.red("Error: User not found"));
        }
    }
}

module.exports = Github_Command;
