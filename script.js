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

// Handle Key Press
const calculatorKeys = document.querySelector(".keys")
calculatorKeys.addEventListener("click", (event) => {
  const {target} = event
  if(!target.matches("button")) {
    return
  }
  if(target.classList.contains("operator")) {
    handleOperator(target.value)
    updateDisplay()
    return
  }
  if(target.classList.contains("decimal")) {
    inputDecimal(target.value)
    updateDisplay()
    return
  }
  if(target.classList.contains("all-clear")) {
    resetCalculator()
    updateDisplay()
    return
  }

  inputDigit(target.value)
  updateDisplay()
})

//Input Digits
function inputDigit(digit){
  const {displayValue, waitingForSecondOperand} = calculator
  if(waitingForSecondOperand === true) {
    calculator.displayValue = digit
    calculator.waitingForSecondOperand = false
  } else {
    calculator.displayValue = displayValue === "0" ? digit : displayValue + digit
  }
}

//Input Decimal
function inputDecimal(dot){
  if(calculator.waitingForSecondOperand === true) {
    calculator.displayValue = "0."
    calculator.waitingForSecondOperand = false
    return
  }
  if(!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot
  }
}
