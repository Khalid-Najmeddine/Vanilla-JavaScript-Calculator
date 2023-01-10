// Object Values
const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null
}

//Update Display
function updateDisplay() {
  const display = document.querySelector(".screen")
  display.value = calculator.displayValue
}
updateDisplay()