let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");

/* BUTTON CLICK (FIXED) */
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    let value = btn.getAttribute("data-value");
    handleInput(value);
  });
});

/* KEYBOARD SUPPORT */
document.addEventListener("keydown", (e) => {
  let key = e.key;

  if (key === "Enter") key = "=";
  if (key === "Backspace") key = "⌫";
  if (key === "Escape") key = "C";

  handleInput(key);
});

/* MAIN LOGIC */
function handleInput(value) {

  if (!value) return;

  if (!isNaN(value) || value === ".") {
    display.value += value;
  }

  else if (["+", "-", "*", "/"].includes(value)) {
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

/* CLOCK */
function updateClock() {
  let now = new Date();
  document.getElementById("clock").innerText = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();