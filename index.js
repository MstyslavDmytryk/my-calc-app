class Calculator {
  constructor(previousTextOperand, currentTextOperand) {
    this.previousTextOperand = previousTextOperand;
    this.currentTextOperand = currentTextOperand;
    this.clear();
  }

  clear() {
    this.previousOperand = " ";
    this.currentOperand = " ";
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.slice(0, -1);
  }

  chooseOperation(operation) {
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  compute() {
    this.currentOperand =
      parseFloat(this.currentOperand) + parseFloat(this.previousOperand);
  }

  updateDisplay() {
    this.currentTextOperand.innerText = this.currentOperand;
    if (this.operation != null) {
      this.previousTextOperand.innerText =
        this.previousOperand + this.operation;
    }
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const plusMinusButton = document.querySelector("[data-plus-minus]");
const equalsButton = document.querySelector("[data-equals]");
const previousTextOperand = document.querySelector("[data-previous-operand");
const currentTextOperand = document.querySelector("[data-current-operand");

const calculator = new Calculator(previousTextOperand, currentTextOperand);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});

equalsButton.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});
