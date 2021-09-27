const readline = require("readline");

const { stdin, stdout } = process;
let rl = null;

/***  I/O  ***/
module.exports.init = () => {
    if (rl !== null)
        throw new Error("Cannot call init() twice");

    rl = readline.createInterface({
        input: stdin,
        output: stdout,
        terminal: true,
    });
};

module.exports.gets = (query = '', echo = true) => {
    if (rl == null)
        throw new Error("Call init() to use gets()");

    rl.output = echo ? stdout: null;

    if (!echo)
        stdout.write(query);

    return new Promise(resolve => {
        rl.question(query, answer => {
            if (!echo)
                stdout.write('\n');

            resolve(answer);
        });
    });
};

module.exports.close = () => {
    if (rl == null)
        throw new Error("Cannot close if uninitialized");

    rl.close();
};

/***  Styles  ***/
module.exports.color = {
    set_bg(r, g, b) {
        stdout.write(`\x1b[48;2;${r};${g};${b}m`);
    },

    reset_bg() {
        stdout.write("\x1b[49m");
    },

    set_fg(r, g, b) {
        stdout.write(`\x1b[38;2;${r};${g};${b}m`);
    },

    reset_fg() {
        stdout.write("\x1b[39m");
    }
};

module.exports.reset_styles = () => stdout.write("\x1b[m");
