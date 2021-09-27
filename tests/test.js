const termctl = require("../index.js");

(async function() {
    termctl.color.set_bg(0, 0, 0);
    termctl.color.set_fg(255, 255, 0);
    console.log("     Login     ");

    termctl.color.reset_fg();
    termctl.color.reset_bg();
    termctl.init();

    try {
        const uname = await termctl.gets("Username: ");
        const pswd = await termctl.gets("Password: ", false);

        // validation...

        console.log("Login successful...");
    } catch(err) {
        console.error(err);
    } finally {
        termctl.close();
        termctl.reset_styles();
    }
})();