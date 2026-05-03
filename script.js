let display = document.getElementById("display");

function appendValue(value) {
  if (value === '.') {
    let parts = display.value.split(/[\+\-\*\/]/);
    let lastNumber = parts[parts.length - 1];

    if (lastNumber.includes('.')) return;
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
    display.value = eval(display.value) / 100;
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