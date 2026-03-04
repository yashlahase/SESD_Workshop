import axios from "axios";
import chalk = require("chalk");

class Weather_Command {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command("weather <city>")
            .description("Get weather information for a city")
            .action((city) => this.getWeather(city));
    }

    async getWeather(city: string) {
        try {
            const res = await axios.get(`https://wttr.in/${city}?format=j1`);
            const data = res.data.current_condition[0];
            console.log(chalk.blue(`\n🌤️  Weather in ${city}:`));
            console.log(chalk.yellow(`Temperature: ${data.temp_C}°C`));
            console.log(chalk.cyan(`Condition: ${data.weatherDesc[0].value}`));
            console.log(chalk.green(`Humidity: ${data.humidity}%`));
        } catch (err) {
            console.log(chalk.red("Error fetching weather data"));
        }
    }
}

module.exports = Weather_Command;
