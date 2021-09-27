# Termctl
Just a minimal & simple library to do some basic terminal stuff.

# Usage
```javascript
const termctl = require("termctl");
```

<b>Note:</b> I have just tested this on my Linux Mint so I don't know if changing colors will work on Windows or Mac.

# Methods

## Input/Output

* You need to call ``init()`` method once before using ``gets()`` method to take input because <b>termctl</b> uses Node.js's <b>readline</b> module, so ``init()`` will be used to create an instance of ``readline.Interface``.

  ```javascript
  termctl.init();
  ```

* ``gets()`` prints a prompt message and takes user input from the terminal (stdin). <b>It returns the value in a promise.</b> First argumemt is the prompt messeage to be displayed. Second argument specifies whether to print what user is typing (echo). Default value is ``true``.

  ```javascript
  const uname = await termctl.gets("Enter your name: ");
  const pswd = await termctl.gets("Enter password: ", false);
  ```

* Call ``close()`` to close the ``readline.Interface`` instance and relinquish control over input and output streams (stdin and stdin).

  ```javascript
  termctl.close();
  ```

## Styling
Just using escape sequences inside these methods for changing styles.
<br><br>

* Set background color
  ```javascript
  termctl.color.set_bg(255, 255, 100); // r, g, b
  ```

* Reset background color
  ```javascript
  termctl.color.reset_bg();
  ```

* Set foreground color
  ```javascript
  termctl.color.set_fg(0, 0, 0); // r, g, b
  ```

* Reset foreground color
  ```javascript
  termctl.color.reset_fg();
  ```

* Reset all styles
  ```javascript
  termctl.color.reset_styles();
  ```