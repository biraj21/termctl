# Termctl
A simple library to do some basic terminal stuff.

![Screenshot](ss.png)

# Usage
```javascript
const termctl = require("termctl");
```

**Note:** We have tested this on Linux Mint and Windows 10 but we don't know if changing colors will work on Mac.

# Methods

## Input/Output

[1]: <https://nodejs.org/api/readline.html#readline_class_interface>
[2]: <https://nodejs.org/api/readline.html#readline_rl_close>

- You need to call `init()` method once before using `gets()` because **termctl** uses Node.js's **readline** module, so `init()` will be used to create an instance of [`readline.Interface`][1].

  ```javascript
  termctl.init();
  ```

- `gets()` is used to take user input from the terminal (stdin). First argument is the prompt message to be displayed. Second argument specifies whether to print what user is typing (echo). It's default value is `true`.

  ```javascript
  // termctl.gets(query?: string, echo?: boolean) => Promise<any>

  const uname = await termctl.gets("Enter your name: ");
  const pswd = await termctl.gets("Enter password: ", false);
  ```

- Call `close()` to [close][2] the [`readline.Interface`][1] instance.

  ```javascript
  termctl.close();
  ```

## Styling

- Set background color
  ```javascript
  // termctl.color.set_bg(r: number, g: number, b: number): void

  termctl.color.set_bg(255, 255, 100);

  // (or) css style hex colors
  termctl.color.set_bg(0xFFFF64); // 0xRRGGBB format
  ```

- Reset background color to default
  ```javascript
  // termctl.color.reset_bg(): void

  termctl.color.reset_bg();
  ```

- Set foreground color
  ```javascript
  // termctl.color.set_bg(r: number, g: number, b: number): void

  termctl.color.set_fg(0, 0, 0);

  // (or) css style hex colors
  termctl.color.set_fg(0x000000); // 0xRRGGBB format
  ```

- Reset foreground color to default
  ```javascript
  // termctl.color.reset_bg(): void

  termctl.color.reset_fg();
  ```

- Bold
  ```javascript
  // termctl.set_bold(bold?: boolean): void

  termctl.color.set_bold();
  ```

- Italic
  ```javascript
  // termctl.set_italic(italic?: boolean): void

  termctl.color.set_italic();
  ```

- Underline
  ```javascript
  // termctl.set_underline(underline?: boolean): void

  termctl.color.set_underline();
  ```

- Resets all styles to default
  ```javascript
  // termctl.color.reset_styles(): void

  termctl.color.reset_styles();
  ```

> **Note:** We are just using escape sequences inside these methods for changing styles. So resetting styles before exiting is always a good idea.
