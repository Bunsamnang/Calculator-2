const display = document.querySelector(".js-display");
display.value = localStorage.getItem("display") || "";

display.innerHTML = display.value; // Get the value to display in the input element

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
}

function showResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
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
document.body.addEventListener("keydown", (event) => {
  changeACToC();
  if (event.key === "0") {
    display.value += "0";
  }
  if (event.key === "1") {
    display.value += "1";
  }
  if (event.key === "2") {
    display.value += "2";
  }
  if (event.key === "3") {
    display.value += "3";
  }
  if (event.key === "4") {
    display.value += "4";
  }
  if (event.key === "5") {
    display.value += "5";
  }
  if (event.key === "6") {
    display.value += "6";
  }
  if (event.key === "7") {
    display.value += "7";
  }
  if (event.key === "8") {
    display.value += "8";
  }
  if (event.key === "9") {
    display.value += "9";
  }
  if (event.key === ".") {
    display.value += ".";
  }
  if (event.key === "+") {
    display.value += " + ";
  }
  if (event.key === "-") {
    display.value += " - ";
  }
  if (event.key === "*") {
    display.value += " * ";
  }
  if (event.key === "/") {
    display.value += " / ";
    console.log(event);
  }
  if (event.key === "=" || event.key === "Enter") {
    showResult();
  }

  if (event.key === "c") {
    clearDisplay();
  }
});
