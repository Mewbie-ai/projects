const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const screen = document.querySelector("[data-screen]");
const equalsBtn = document.querySelector("[data-equals]");
const clearBtn = document.querySelector("[data-clear]");
const undoBtn = document.querySelector("[data-undo]");
numberBtns.forEach((button) => button.addEventListener("click", () => appendNumber(button.textContent)));
operatorBtns.forEach((button) => button.addEventListener("click", () => setOperation(button.textContent)));

function appendNumber(number) {
  if (screen.textContent === "0" || updateScreen) update();
  screen.textContent += number;
}

function setOperation(operator) {
  if (chosenOperator !== null) evaluate();
  a = screen.textContent;
  chosenOperator = operator;
  updateScreen = true;
}

/* * * * * * * * * * * * * * 
* a => first number        *  
* b => second number       *
* operator => +, -, *, /   *
*          ______________  *
* * * *  | explanations |  * 
<( o w o)>/ ___________~|
*/ // |
let a = "";
let b = "";
let chosenOperator = null;
let updateScreen = false;

let plus = (x, y) => x + y;
let minus = (x, y) => x - y;
let multiply = (x, y) => x * y;
let divide = (x, y) => x / y;

function operate(operator, x, y) {
  x = Number(x);
  y = Number(y);
  switch (operator) {
    case "+":
      return plus(x, y);
    case "-":
      return minus(x, y);
    case "*":
      return multiply(x, y);
    case "/":
      if (y === 0) return null;
      else return divide(x, y);
    default:
      return null;
  }
}

function evaluate() {
  if (chosenOperator === null || updateScreen) return;
  b = screen.textContent;
  screen.textContent = result(operate(chosenOperator, a, b));
  chosenOperator = null;
}

function result(number) {
  return Math.round(number);
}

function update() {
  screen.textContent = "";
  updateScreen = false;
}

function clear() {
  screen.textContent = "0";
  a = "";
  b = "";
  chosenOperator = null;
}

function undo() {
  screen.textContent = screen.textContent.toString().slice(0, -1);
}

function setInput(e) {
  if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
  // if (e.key === ".") appendPoint();
  if (e.key === "=" || e.key === "Enter") evaluate();
  if (e.key === "Backspace") undo();
  if (e.key === "Delete") clear();
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") setOperation(convertOperator(e.key));
}

function convertOperator(keyboardOperator) {
  if (keyboardOperator === "/") return "/";
  if (keyboardOperator === "*") return "*";
  if (keyboardOperator === "-") return "−";
  if (keyboardOperator === "+") return "+";
}

window.addEventListener("keydown", setInput);
equalsBtn.addEventListener("click", evaluate);
clearBtn.addEventListener("click", clear);
undoBtn.addEventListener("click", undo);
