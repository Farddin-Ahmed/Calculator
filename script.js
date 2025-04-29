let display = document.querySelector(".display");

function insert(value) {
  display.innerText += value;
}

function calculate() {
  display.innerText = eval(display.innerText);
}

function cleardisplay() {
  display.innerText = "";
}

function deletechar() {
  display.innerText = display.innerText.slice(0, -1);
}

function sign() {
  if (display.innerText == "") {
    display.innerText = "-";
  } else if (display.innerText == "-") {
    display.innerText = "";
  } else {
    display.innerText = (parseFloat(display.innerText) * -1).toString();
  }
}

document.addEventListener("keydown", (event) => {
  if (/^[0-9]$/.test(event.key) || /^[+\-*\/%.]$/.test(event.key)) {
    insert(event.key);
  } else if (event.key === "Backspace") {
    deletechar();
  } else if (event.key === "Enter" || event.key === "=") {
    calculate();
  } else if (event.key === "c" || event.key === "C") {
    cleardisplay();
  } else if (event.key === "s" || event.key === "S") {
    sign();
  } else {
    return;
  }
});
