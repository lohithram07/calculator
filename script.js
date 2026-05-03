let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");

/* BUTTON CLICK */
buttons.forEach(btn => {
  btn.addEventListener("click", () => handleInput(btn.innerText));
});

/* KEYBOARD SUPPORT */
document.addEventListener("keydown", (e) => {
  let key = e.key;

  if (key === "Enter") key = "=";
  if (key === "Backspace") key = "⌫";
  if (key === "Escape") key = "C";
  if (key === "*") key = "*";
  if (key === "/") key = "/";

  handleInput(key);
});

/* MAIN FUNCTION */
function handleInput(value) {

  if (!isNaN(value) || value === ".") {
    if (value === "." && display.value.includes(".")) return;
    display.value += value;
  }

  else if (value === "+" || value === "-" || value === "*" || value === "/") {
    display.value += value;
  }

  else if (value === "C") {
    display.value = "";
  }

  else if (value === "⌫") {
    display.value = display.value.slice(0, -1);
  }

  else if (value === "=") {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  }

  else if (value === "%") {
    try {
      display.value = eval(display.value) / 100;
    } catch {
      display.value = "Error";
    }
  }

  else if (value === "√") {
    try {
      display.value = Math.sqrt(eval(display.value));
    } catch {
      display.value = "Error";
    }
  }
}

/* REAL TIME CLOCK */
function updateClock() {
  let now = new Date();
  let time = now.toLocaleTimeString();
  document.getElementById("clock").innerText = time;
}

setInterval(updateClock, 1000);
updateClock();