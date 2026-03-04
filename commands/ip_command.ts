import axios from "axios";
import chalk = require("chalk");

class IP_Command {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command("ip [address]")
            .description("Get IP geolocation info (leave empty for your IP)")
            .action((address) => this.getIPInfo(address));
    }

    async getIPInfo(address?: string) {
        try {
            const url = address ? `http://ip-api.com/json/${address}` : "http://ip-api.com/json/";
            const res = await axios.get(url);
            const data = res.data;
            console.log(chalk.blue(`\n🌐 IP: ${data.query}`));
            console.log(chalk.yellow(`Country: ${data.country}`));
            console.log(chalk.green(`City: ${data.city}`));
            console.log(chalk.cyan(`ISP: ${data.isp}`));
            console.log(chalk.magenta(`Timezone: ${data.timezone}`));
        } catch (err) {
            console.log(chalk.red("Error fetching IP info"));
        }
    }
}

module.exports = IP_Command;
