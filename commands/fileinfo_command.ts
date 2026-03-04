import * as fs from "fs";
import * as path from "path";
import chalk = require("chalk");

class FileInfo_Command {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command("fileinfo <filename>")
            .description("Get information about a file")
            .action((filename) => this.getFileInfo(filename));
    }

    getFileInfo(filename: string) {
        try {
            const stats = fs.statSync(filename);
            const ext = path.extname(filename);
            const basename = path.basename(filename);
            
            console.log(chalk.blue(`\n📄 File: ${basename}`));
            console.log(chalk.yellow(`Size: ${this.formatBytes(stats.size)}`));
            console.log(chalk.green(`Extension: ${ext || 'None'}`));
            console.log(chalk.cyan(`Created: ${stats.birthtime.toLocaleString()}`));
            console.log(chalk.magenta(`Modified: ${stats.mtime.toLocaleString()}`));
            console.log(chalk.white(`Type: ${stats.isDirectory() ? 'Directory' : 'File'}`));
        } catch (err) {
            console.log(chalk.red("Error: File not found"));
        }
    }

    formatBytes(bytes: number): string {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    }
}

module.exports = FileInfo_Command;
