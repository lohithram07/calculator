let display = document.getElementById("display");

function appendValue(value) {
  if (value === '.') {
    let parts = display.value.split(/[\+\-\*\/]/);
    let last = parts[parts.length - 1];
    if (last.includes('.')) return;
  }
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function percentage() {
  try {
    let parts = display.value.split(/([\+\-\*\/])/);
    let last = parts.pop();
    let result = parseFloat(last) / 100;
    display.value = parts.join('') + result;
  } catch {
    display.value = "Error";
  }
}

function squareRoot() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch {
    display.value = "Error";
  }
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}