const {Command} = require("commander")

class CLI_Engine{
    program;
    constructor(){
        this.program = new Command()
    }

    registerCommand(commands){
        commands.forEach(cmdClass => {
            const cmdInstance = new cmdClass(this.program);
            cmdInstance.register()
        })
    }

    run() {
        this.program.parse(process.argv);
    }
}

module.exports = CLI_Engine;
