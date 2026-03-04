# MyCLI - Feature-Rich Command Line Tool

A fully functional CLI tool built with Node.js and TypeScript using Object-Oriented Programming principles. This tool provides 12 custom commands with API integrations for various functionalities.

## 🚀 Features

- **Object-Oriented Architecture**: Built using classes and OOP concepts
- **12 Custom Commands**: Wide range of functionalities
- **3+ API Integrations**: GitHub, Weather, Quotes, Crypto, and more
- **Colored Output**: Beautiful terminal output using Chalk
- **TypeScript**: Type-safe code with full TypeScript support
- **Modular Design**: Easy to extend with new commands

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## 🛠️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd SESD_WorkShop
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

4. **Link the CLI globally (optional)**
   ```bash
   npm link
   ```

5. **Run the CLI**
   ```bash
   # If linked globally
   mycli <command>
   
   # Or run directly
   node dist/index.js <command>
   
   # Or use dev mode
   npm run dev <command>
   ```

## 📚 Available Commands

### 1. **greet** - Greet someone
```bash
mycli greet John
# Output: 👋 Hello, John!
```

### 2. **joke** - Get a random joke
```bash
mycli joke
# Output: Random joke with setup and punchline
```

### 3. **fileinfo** - Get file information
```bash
mycli fileinfo package.json
# Output: File size, extension, created date, modified date, etc.
```

### 4. **weather** - Get weather information
```bash
mycli weather London
# Output: Temperature, condition, humidity
```
**API Used**: wttr.in

### 5. **github** - Get GitHub user info
```bash
mycli github torvalds
# Output: Name, bio, repos, followers, profile URL
```
**API Used**: GitHub API

### 6. **quote** - Get inspirational quote
```bash
mycli quote
# Output: Random inspirational quote with author
```
**API Used**: Quotable API

### 7. **crypto** - Get cryptocurrency price
```bash
mycli crypto bitcoin
mycli crypto ethereum
# Output: Current price in USD
```
**API Used**: CoinGecko API

### 8. **dog** - Get random dog image
```bash
mycli dog
# Output: URL to random dog image
```
**API Used**: Dog CEO API

### 9. **trivia** - Get random trivia question
```bash
mycli trivia
# Output: Question, category, difficulty, and answer
```
**API Used**: Open Trivia Database

### 10. **advice** - Get random advice
```bash
mycli advice
# Output: Random piece of advice
```
**API Used**: Advice Slip API

### 11. **country** - Get country information
```bash
mycli country India
# Output: Capital, population, region, currency
```
**API Used**: REST Countries API

### 12. **ip** - Get IP geolocation info
```bash
mycli ip
mycli ip 8.8.8.8
# Output: Country, city, ISP, timezone
```
**API Used**: IP-API

## 🏗️ Project Structure

```
SESD_WorkShop/
├── cli_engine/
│   └── cli_engine.ts          # Main CLI engine class
├── commands/
│   ├── greet_command.ts       # Greet command
│   ├── joke_command.ts        # Joke command
│   ├── fileinfo_command.ts    # File info command
│   ├── weather_command.ts     # Weather command
│   ├── github_command.ts      # GitHub command
│   ├── quote_command.ts       # Quote command
│   ├── crypto_command.ts      # Crypto command
│   ├── dog_command.ts         # Dog image command
│   ├── trivia_command.ts      # Trivia command
│   ├── advice_command.ts      # Advice command
│   ├── country_command.ts     # Country command
│   └── ip_command.ts          # IP info command
├── index.ts                   # Entry point
├── package.json
├── tsconfig.json
└── README.md
```

## 🎨 Technologies Used

- **Node.js**: Runtime environment
- **TypeScript**: Type-safe JavaScript
- **Commander.js**: CLI framework
- **Axios**: HTTP client for API calls
- **Chalk**: Terminal styling

## 🔧 Development

### Run in development mode
```bash
npm run dev <command>
```

### Build the project
```bash
npm run build
```

### Add a new command

1. Create a new file in `commands/` directory:
```typescript
import chalk = require("chalk");

class YourCommand {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command("yourcommand <arg>")
            .description("Your command description")
            .action((arg) => this.execute(arg));
    }

    execute(arg: string) {
        console.log(chalk.blue(`Executing with ${arg}`));
    }
}

module.exports = YourCommand;
```

2. Register it in `index.ts`:
```typescript
const your_command = require("./commands/your_command");
engine.registerCommand([..., your_command]);
```

## 📝 Example Usage

```bash
# Get weather for your city
mycli weather Mumbai

# Check GitHub profile
mycli github octocat

# Get crypto prices
mycli crypto bitcoin

# Get file information
mycli fileinfo README.md

# Get your IP info
mycli ip

# Get a motivational quote
mycli quote
```

## 🌟 Features Implemented

✅ Object-Oriented Programming with classes  
✅ 12+ custom commands  
✅ 3+ API integrations (GitHub, Weather, Quotes, Crypto, Country, IP, etc.)  
✅ Colored CLI output using Chalk  
✅ Help descriptions for all commands  
✅ Error handling  
✅ TypeScript support  
✅ Modular architecture  

