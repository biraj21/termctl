const termctl = require("../index.js");

(async function() {
    termctl.color.set_bg(0, 0, 0);
    termctl.color.set_fg(255, 255, 0);
    termctl.set_bold();
    console.log("     Login     ");

    termctl.set_bold(false);
    termctl.color.reset_fg();
    termctl.color.reset_bg();
    termctl.init();

    try {
        const uname = await termctl.gets("Username: ");
        const pswd = await termctl.gets("Password: ", false);

        // validation...

        termctl.set_italic();
        console.log("\nLogin successful...");
    } catch(err) {
        console.error(err);
    } finally {
        termctl.close();
        termctl.reset_styles();
    }
})();