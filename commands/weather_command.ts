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
            // First get coordinates from geocoding API
            const geoRes = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`);
            
            if (!geoRes.data.results || geoRes.data.results.length === 0) {
                console.log(chalk.red("City not found. Try another city name."));
                return;
            }

            const location = geoRes.data.results[0];
            const { latitude, longitude, name, country } = location;

            // Get weather data using coordinates
            const weatherRes = await axios.get(
                `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=celsius`
            );

            const weather = weatherRes.data.current_weather;
            const weatherCodes: any = {
                0: 'Clear sky', 1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
                45: 'Foggy', 48: 'Foggy', 51: 'Light drizzle', 53: 'Drizzle', 55: 'Heavy drizzle',
                61: 'Light rain', 63: 'Rain', 65: 'Heavy rain', 71: 'Light snow', 73: 'Snow', 75: 'Heavy snow',
                77: 'Snow grains', 80: 'Light showers', 81: 'Showers', 82: 'Heavy showers',
                85: 'Light snow showers', 86: 'Snow showers', 95: 'Thunderstorm', 96: 'Thunderstorm with hail', 99: 'Heavy thunderstorm'
            };

            console.log(chalk.blue(`\n🌤️  Weather in ${name}, ${country}:`));
            console.log(chalk.yellow(`Temperature: ${weather.temperature}°C`));
            console.log(chalk.cyan(`Condition: ${weatherCodes[weather.weathercode] || 'Unknown'}`));
            console.log(chalk.green(`Wind Speed: ${weather.windspeed} km/h`));
        } catch (err) {
            console.log(chalk.red("Error fetching weather data. Please try again."));
        }
    }
}

module.exports = Weather_Command;
