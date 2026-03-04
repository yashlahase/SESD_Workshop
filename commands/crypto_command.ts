import axios from "axios";
import chalk = require("chalk");

class Crypto_Command {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command("crypto <coin>")
            .description("Get cryptocurrency price (e.g., bitcoin, ethereum)")
            .action((coin) => this.getCryptoPrice(coin));
    }

    async getCryptoPrice(coin: string) {
        try {
            const res = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`);
            const price = res.data[coin]?.usd;
            if (price) {
                console.log(chalk.blue(`\n💰 ${coin.toUpperCase()}: $${price.toLocaleString()}`));
            } else {
                console.log(chalk.red("Coin not found"));
            }
        } catch (err) {
            console.log(chalk.red("Error fetching crypto price"));
        }
    }
}

module.exports = Crypto_Command;
