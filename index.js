const readline = require("readline");

const { stdin, stdout } = process;
let rl = null;

module.exports = {
    /***  I/O  ***/
    init() {
        if (rl !== null)
            throw new Error("Cannot call init() twice");

        rl = readline.createInterface({
            input: stdin,
            output: stdout,
            terminal: true,
        });
    },

    gets(query = '', echo = true) {
        if (rl == null)
            throw new Error("Call init() once to use gets()");

        rl.output = echo ? stdout : null;

        if (!echo)
            stdout.write(query);

        return new Promise(resolve => {
            rl.question(query, answer => {
                if (!echo)
                    stdout.write('\n');

                resolve(answer);
            });
        });
    },

    close() {
        if (rl == null)
            throw new Error("Cannot close if uninitialized");

        rl.close();
    },

    /***  Styles  ***/
    color: {
        set_bg(r, g, b) {
            if (g === undefined && b === undefined) {
                stdout.write(`\x1b[48;2;${(r & 0xFF0000) >> 16 };${(r & 0x00FF00) >> 8};${ r & 0x0000FF}m`);
                return;
            }
            stdout.write(`\x1b[48;2;${r};${g};${b}m`);
        },

        reset_bg() {
            stdout.write("\x1b[49m");
        },

        set_fg(r, g, b) {
            if (g === undefined && b === undefined) {
                stdout.write(`\x1b[38;2;${(r & 0xFF0000) >> 16 };${(r & 0x00FF00) >> 8};${ r & 0x0000FF}m`);
                return;
            }
            stdout.write(`\x1b[38;2;${r};${g};${b}m`);
        },

        reset_fg() {
            stdout.write("\x1b[39m");
        },
    },

    set_bold(bold = true) {
        stdout.write(`\x1b[${bold ? 1 : 22}m`);
    },

    set_italic(italic = true) {
        stdout.write(`\x1b[${italic ? 3 : 23}m`);
    },

    set_underline(underline = true) {
        stdout.write(`\x1b[${underline ? 4 : 24}m`);
    },

    reset_styles() {
        stdout.write("\x1b[m")
    },
};