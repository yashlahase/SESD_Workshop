import axios from "axios";
import chalk = require("chalk");

class Country_Command {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command("country <name>")
            .description("Get information about a country")
            .action((name) => this.getCountryInfo(name));
    }

    async getCountryInfo(name: string) {
        try {
            const res = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
            const country = res.data[0];
            const currencies: any = country.currencies || {};
            const currencyValues: any[] = Object.values(currencies);
            const currencyName = currencyValues[0]?.name || 'N/A';
            
            console.log(chalk.blue(`\n🌍 ${country.name.common}`));
            console.log(chalk.yellow(`Capital: ${country.capital?.[0] || 'N/A'}`));
            console.log(chalk.green(`Population: ${country.population.toLocaleString()}`));
            console.log(chalk.cyan(`Region: ${country.region}`));
            console.log(chalk.magenta(`Currency: ${currencyName}`));
        } catch (err) {
            console.log(chalk.red("Error: Country not found"));
        }
    }
}

module.exports = Country_Command;
