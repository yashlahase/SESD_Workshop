# Quick Start Guide

## Installation & Setup

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Test a command
node dist/index.js greet "Your Name"
```

## Quick Command Reference

| Command | Description | Example |
|---------|-------------|---------|
| `greet <name>` | Greet someone | `mycli greet John` |
| `joke` | Random joke | `mycli joke` |
| `fileinfo <file>` | File information | `mycli fileinfo package.json` |
| `weather <city>` | Weather info | `mycli weather London` |
| `github <user>` | GitHub user info | `mycli github torvalds` |
| `quote` | Inspirational quote | `mycli quote` |
| `crypto <coin>` | Crypto price | `mycli crypto bitcoin` |
| `dog` | Random dog image | `mycli dog` |
| `trivia` | Trivia question | `mycli trivia` |
| `advice` | Random advice | `mycli advice` |
| `country <name>` | Country info | `mycli country India` |
| `ip [address]` | IP geolocation | `mycli ip` or `mycli ip 8.8.8.8` |

## API Integrations

1. **GitHub API** - User information
2. **wttr.in** - Weather data
3. **Quotable API** - Inspirational quotes
4. **CoinGecko API** - Cryptocurrency prices
5. **Dog CEO API** - Dog images
6. **Open Trivia DB** - Trivia questions
7. **Advice Slip API** - Random advice
8. **REST Countries API** - Country information
9. **IP-API** - IP geolocation

## Development

```bash
# Run in dev mode
npm run dev greet "Test"

# Build
npm run build

# Link globally
npm link

# Then use anywhere
mycli greet "World"
```
