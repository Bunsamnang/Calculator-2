//input box (readonly)
const display = document.querySelector(".js-display");
display.value = localStorage.getItem("display") || "";

display.innerHTML = display.value; // Get the value to display in the input element

//When clicking operand btns
const numBtn = document.querySelectorAll(".number");
numBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    addToDisplay(btn.innerHTML);
  });
});

//When clicking operator btns
const operatorBtn = document.querySelectorAll(".operator");
operatorBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    addToDisplay(` ${btn.innerHTML} `);
  });
});

//When clicking clear btn
const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", () => {
  clearDisplay();
});

// When clicking add-two-zero btn
const addTwoZerosBtn = document.querySelector(".add-two-zero");
addTwoZerosBtn.addEventListener("click", () => {
  addTwoZeros();
});

//When clicking =
const result = document.querySelector(".result");
result.addEventListener("click", () => {
  showResult();
});

//
function addToDisplay(input) {
  // Change the text of clear btn when calculating
  changeACToC();

  display.value += input;
}

function clearDisplay() {
  display.value = "";
  document.querySelector(".clear-btn").innerHTML = "AC"; // Change the text of clear btn to AC back when clicked
  saveToStorage(); // save to local storage
}

// Change the text of clear btn when calculating
function changeACToC() {
  document.querySelector(".clear-btn").innerHTML = "C";
}

function addTwoZeros() {
  display.value = display.value === "" ? "" : Number(display.value) / 100;
  saveToStorage();
}

function showResult() {
  try {
    display.value = eval(display.value);
    saveToStorage();
  } catch (error) {
    display.value = "Error";
    saveToStorage();
  }
}

function saveToStorage() {
  localStorage.setItem("display", display.value);
}

// A function to add negative or positive sign

let isNegative = false; // Initialize a variable to tract the state
const negativeOrPositive = document.querySelector(".negative-or-positive");

negativeOrPositive.addEventListener("click", () => {
  if (isNegative) {
    display.value = display.value.slice(1); // Removes the "-" symbol, slice method returns a selected element from start to end
    isNegative = false; // Update the state when it is negative
  } else {
    display.value = "-" + display.value;
    isNegative = true; // Update the state when it is positive
  }
});

// Let users access the calculator by pressing some keys of keyboard
document.addEventListener("keydown", (event) => {
  const allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  if (allowedKeys.includes(event.key)) {
    addToDisplay(event.key);
  }

  switch (event.key) {
    case "+":
      addToDisplay(` + `);
      break;
    case "-":
      addToDisplay(` - `);
      break;
    case "*":
      addToDisplay(` * `);
      break;
    case "/":
      addToDisplay(` / `);
      break;

    case "=":
    case "Enter":
      showResult();
      break;
    case "c":
    case "Backspace":
      clearDisplay();
      break;
    default:
      break;
  }
});
