let display = document.getElementById("display");

// Function to add characters to the display
function addToDisplay(value) {
  display.value += value;
}

// Function to clear the display
function clearDisplay() {
  display.value = "0";
}

// Function to calculate the expression in the display
function calculate() {
  display.value = eval(display.value);
}

// function for clear the value
 function clearDisplay(){
  display.value= " ";
 }