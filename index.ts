#!/usr/bin/env node

const cli_engine = require("./cli_engine/cli_engine");
const greet_command = require("./commands/greet_command");
const joke_command = require("./commands/joke_command");
const fileinfo_command = require("./commands/fileinfo_command");
const weather_command = require("./commands/weather_command");
const github_command = require("./commands/github_command");
const quote_command = require("./commands/quote_command");
const crypto_command = require("./commands/crypto_command");
const dog_command = require("./commands/dog_command");
const trivia_command = require("./commands/trivia_command");
const advice_command = require("./commands/advice_command");
const country_command = require("./commands/country_command");
const ip_command = require("./commands/ip_command");

const engine = new cli_engine();

engine.registerCommand([
    greet_command,
    joke_command,
    fileinfo_command,
    weather_command,
    github_command,
    quote_command,
    crypto_command,
    dog_command,
    trivia_command,
    advice_command,
    country_command,
    ip_command
]);

engine.run();
