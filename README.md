# Simple Calculator

A clean, keyboard-friendly calculator built with **HTML, CSS, and JavaScript** — made to practice layout, state management, and event handling.

## About

I built this to get comfortable with **CSS Grid** and the small "state machine" that every calculator needs. It's a vanilla-JS project — no frameworks, no build step. Just open `index.html`.

You can try it here: **[Live Demo](https://your-calculator-link.netlify.app/)** *(replace with your deployed URL)*

## Features

- Basic arithmetic: **add, subtract, multiply, divide**
- **Chained calculations** — `5 + 3 + 2 =` computes as you go
- **Operator swapping** — pressing `+` then `×` replaces the pending operator
- **Error handling** — divide-by-zero shows `Error`, and the next digit recovers
- **Float cleanup** — `0.1 + 0.2` displays `0.3`, not `0.30000000000000004`
- **CSS Grid** button pad with `grid-template-areas`
- **Retro VT323** display font
- **Hover / active** feedback on every button

## Built With

- **HTML5** — semantic button layout
- **CSS3** — CSS Grid (`grid-template-areas`), custom properties, transitions
- **JavaScript (ES6)** — event delegation, a four-variable state model
- **Google Fonts** — [VT323](https://fonts.google.com/specimen/VT323)

## How It Works

The whole calculator runs on four pieces of state:

```js
let currentInput      = '0';    // what's on screen
let previousValue     = null;   // left operand
let operator          = null;   // pending op
let waitingForOperand = false;  // start a fresh number?